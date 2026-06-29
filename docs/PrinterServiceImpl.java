package uz.tax_service.service.impl;

import com.github.anastaciocintra.escpos.EscPos;
import com.github.anastaciocintra.escpos.image.BitonalThreshold;
import com.github.anastaciocintra.escpos.image.CoffeeImageImpl;
import com.github.anastaciocintra.escpos.image.EscPosImage;
import com.github.anastaciocintra.escpos.image.RasterBitImageWrapper;
import com.github.anastaciocintra.output.PrinterOutputStream;
import jakarta.transaction.Transactional;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.util.Pair;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import uz.tax_service.constrant.PrinterConstants;
import uz.tax_service.dto.ResponseDto;
import uz.tax_service.dto.company.CompanyDto;
import uz.tax_service.dto.fiscal_module.FiscalModuleZReportInfoDto;
import uz.tax_service.dto.printer.PrinterCreateDto;
import uz.tax_service.dto.printer.PrinterDto;
import uz.tax_service.dto.printer.PrinterUpdateDto;
import uz.tax_service.dto.receipt.ReceiptDataDto;
import uz.tax_service.dto.receipt.ReceiptProductDataDto;
import uz.tax_service.dto.shift_report.ReportFilterDto;
import uz.tax_service.dto.shift_report.ReportResponseDto;
import uz.tax_service.dto.user.UserDto;
import uz.tax_service.entity.ShiftEntity;
import uz.tax_service.enums.PrinterLineWidthEnum;
import uz.tax_service.mapper.PrinterMapper;
import uz.tax_service.repository.PrinterRepository;
import uz.tax_service.service.*;
import uz.tax_service.utils.DataUtil;
import uz.tax_service.utils.PrinterUtil;

import javax.imageio.ImageIO;
import javax.imageio.ImageReadParam;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;
import javax.print.PrintService;
import javax.print.PrintServiceLookup;
import javax.print.attribute.standard.PrinterState;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static uz.tax_service.constrant.PrinterConstants.OPERATION_REFUND;

/**
 * @author : Suhrob Karimov
 * @since : 02/09/2025 - 17:55
 */

@Slf4j
@Service
public class PrinterServiceImpl extends AbstractService<PrinterRepository, PrinterMapper> implements PrinterService {
    private final UserService userService;
    private final CompanyService companyService;
    private final ReceiptService receiptService;
    private final ShiftReportService shiftReportService;
    private final ShiftService shiftService;
    private final FiscalModuleService fiscalModuleService;
    private EscPos escpos;
    private int width;
    @Value("${post-system.serial:0.0.1}")
    private String versionSerial;

    protected PrinterServiceImpl(PrinterRepository repository,
                                 PrinterMapper mapper,
                                 UserService userService,
                                 CompanyService companyService,
                                 ReceiptService receiptService, ShiftReportService shiftReportService, ShiftService shiftService, FiscalModuleService fiscalModuleService) {
        super(repository, mapper);
        this.userService = userService;
        this.companyService = companyService;
        this.receiptService = receiptService;
        this.shiftReportService = shiftReportService;
        this.shiftService = shiftService;
        this.fiscalModuleService = fiscalModuleService;
    }

    @Override
    public ResponseEntity<ResponseDto<List<PrinterDto>>> get() {
        var names = new ArrayList<String>();
        var printServices = PrintServiceLookup.lookupPrintServices(null, null);
        for (PrintService printService : printServices) {
            var name = printService.getName();
            names.add(name);
            if (this.isVirtualPrinter(name)) continue;
            if (this.isPrinterConnected(printService)) continue;

            var entity = repository.getByName(name).orElseGet(() -> {
                var dto = PrinterCreateDto.from(name, PrinterLineWidthEnum.SMALL_ROLL);
                return mapper.fromCreateDto(dto);
            });
            repository.save(entity);
        }

        repository.deleteNotIn(names);
        var data = repository.get().stream().map(mapper::toDto).toList();
        return ResponseDto.ok(data);
    }

    @SneakyThrows
    public ResponseEntity<ResponseDto<Void>> print(String receiptId) {
        var user = userService.getV2();
        var printer = repository.getActive();
        var company = companyService.getActive();
        var pair = receiptService.getReceiptDataForPrinting(receiptId);
        var receiptData = pair.getFirst();
        var receiptItemData = pair.getSecond();
        var printService = PrinterOutputStream.getPrintServiceByName(printer.getName());
        var printerOutputStream = new PrinterOutputStream(printService);

        this.escpos = new EscPos(printerOutputStream);
        this.width = printer.getWidth().getValue();
        this.paintHeader(company, user.name(), receiptData);
        this.paintItems(receiptItemData);
        this.paintTotal(receiptData);
        if (receiptData.receiptTypeId() == 0) {
            this.paintFiscalData(receiptData);
            this.paintQRCode(receiptData.qrcodeUrl());
        }
        this.paintFooter(receiptData.receiptFooter());
        return ResponseDto.ok();
    }

    @Override
    @Transactional
    public ResponseEntity<ResponseDto<Void>> update(PrinterUpdateDto dto) {
        repository.update(dto);
        return ResponseDto.ok();
    }

    @Override
    @SneakyThrows
    public ResponseEntity<ResponseDto<Void>> printShiftInfo(String shiftId) {
        var printer = repository.getActive();
        ShiftEntity shiftEntity = shiftService.getById(shiftId);
        UserDto userDto = userService.get(shiftEntity.getUserId());
        var shiftReport = shiftReportService.get(ReportFilterDto.builder().shiftId(shiftId).build());
        var printService = PrinterOutputStream.getPrintServiceByName(printer.getName());
        var printerOutputStream = new PrinterOutputStream(printService);
        this.escpos = new EscPos(printerOutputStream);
        this.width = printer.getWidth().getValue();
        this.paintShiftInfo(shiftReport, shiftEntity, userDto);
        return ResponseDto.ok();
    }

    @Override
    @SneakyThrows
    public ResponseEntity<ResponseDto<Void>> printZInfo(Integer index) {
        ResponseEntity<ResponseDto<FiscalModuleZReportInfoDto>> zReportInfo = fiscalModuleService.getZReportInfo(index);
        if (zReportInfo.getBody() != null){
            var printer = repository.getActive();
            FiscalModuleZReportInfoDto data = zReportInfo.getBody().getData();
            var printService = PrinterOutputStream.getPrintServiceByName(printer.getName());
            var printerOutputStream = new PrinterOutputStream(printService);
            this.escpos = new EscPos(printerOutputStream);
            this.width = printer.getWidth().getValue();
            this.paintZInfo(data);
            return ResponseDto.ok();
        }
        return ResponseDto.ok();
    }

    @SneakyThrows
    private void paintShiftInfo(ReportResponseDto dto, ShiftEntity shift, UserDto userDto) {
        this.render(font1, PrinterConstants.SHIFT_INFO_HEADLINE, true);
        escpos.writeLF(this.dashedLine());
        this.render(PrinterConstants.TERMINAL_ID, shift.getTerminalId() == null ? "--" : shift.getTerminalId());
        this.render(PrinterConstants.CASHIER, userDto.name());
        escpos.writeLF(this.dashedLine());
        this.render(PrinterConstants.SHIFT_TOTAL_SUM, DataUtil.format(dto.totalSum()));
        this.render(PrinterConstants.SHIFT_SALE_SUM, DataUtil.format(dto.totalPaidSum()));
        this.render(PrinterConstants.SHIFT_REFUND_SUM, DataUtil.format(dto.totalRefundSum()));
        this.render(PrinterConstants.SHIFT_OTHER_SUM, DataUtil.format(0L));
        escpos.writeLF(this.dashedLine());
        var shiftCloseDate = dto.closeDate() == null ? "--" : String.valueOf(dto.closeDate());
        this.render(PrinterConstants.RECEIPT_COUNTS, DataUtil.formatQuantity(dto.receiptCount()));
        this.render(PrinterConstants.SHIFT_OPEN_DATE, String.valueOf(dto.openDate()));
        this.render(PrinterConstants.SHIFT_CLOSE_DATE, shiftCloseDate);
        escpos.writeLF(this.dashedLine());
        escpos.feed(3).cut(EscPos.CutMode.FULL);
        escpos.close();
    }

    @SneakyThrows
    private void paintZInfo(FiscalModuleZReportInfoDto dto) {
        this.render(font1, PrinterConstants.Z_INFO_HEADLINE, true);
        escpos.writeLF(this.dashedLine());
        this.render(PrinterConstants.TERMINAL_ID, dto.terminalId());
        this.render(PrinterConstants.Z_OPEN_DATE, String.valueOf(dto.openedTime()));
        var closeDate = dto.closedTime() == null ? "--" : String.valueOf(dto.closedTime());
        this.render(PrinterConstants.Z_CLOSE_DATE, closeDate);
        escpos.writeLF(this.dashedLine());

        this.render(PrinterConstants.RAQAM, dto.number().toString());
        this.render(PrinterConstants.RECEIPT_COUNTS, dto.checkCount().toString());
        this.render(PrinterConstants.FIRST_SALE_RECEIPT, dto.firstCheckCount().toString());
        this.render(PrinterConstants.LAST_SALE_RECEIPT, dto.lastCheckCount().toString());
        escpos.writeLF(this.dashedLine());

        this.render(font2, PrinterConstants.REFUND_TITLE, true);
        this.render(PrinterConstants.TOTAL_QQS, DataUtil.format(dto.totalRefundVat()));
        this.render(PrinterConstants.TOTAL_CASH_SUM, DataUtil.format(dto.totalRefundCashSum()));
        this.render(PrinterConstants.TOTAL_NOT_CASH_SUM, DataUtil.format(dto.totalCardRefundSum()));
        this.render(PrinterConstants.COUNT, DataUtil.formatQuantity(dto.totalRefundSaleCount()));

        escpos.writeLF(this.dashedLine());
        this.render(font2, PrinterConstants.SALE_TITLE, true);
        this.render(PrinterConstants.TOTAL_QQS, DataUtil.format(dto.totalSaleVat()));
        this.render(PrinterConstants.TOTAL_CASH_SUM, DataUtil.format(dto.totalCashSum()));
        this.render(PrinterConstants.TOTAL_NOT_CASH_SUM, DataUtil.format(dto.totalCardSum()));
        this.render(PrinterConstants.COUNT, DataUtil.formatQuantity(dto.totalSaleCount()));

        escpos.writeLF(this.dashedLine());
        escpos.feed(3).cut(EscPos.CutMode.FULL);
        escpos.close();
    }

    @SneakyThrows
    private void paintHeader(CompanyDto company, String username, ReceiptDataDto receiptData) {
        if (utils.isNotEmpty(company.logoPath())) {
            this.paintLogo(company.logoPath());
            this.newLine(escpos, 40);
        }
        var receiptDate = this.receiptDate(receiptData.receiptDate());
        this.renderIfNotEmpty(font1, company.shortName(), true);
        this.newLine(escpos, 80);
        this.renderIfNotEmpty(font3, company.address(), true);
        this.renderIfNotEmpty(font3, company.phone(), true);
        this.render(PrinterConstants.TIN, company.tin());
        this.render(receiptDate.getFirst(), receiptDate.getSecond());
        this.render(PrinterConstants.RECEIPT_ID, receiptData.receiptSeq().toString());
        this.render(PrinterConstants.CASHIER, username);
        escpos.writeLF(this.dashedLine());
    }

    @SneakyThrows
    private void paintLogo(String logoPath) {
        try {
            Path path = Paths.get(logoPath);
            if (!Files.exists(path)) return;

            ImageInputStream iis = ImageIO.createImageInputStream(path.toFile());
            ImageReader reader = ImageIO.getImageReaders(iis).next();
            reader.setInput(iis);
            int origWidth = reader.getWidth(0);
            int origHeight = reader.getHeight(0);

            var maxWidth = (int) (width * 0.8);
            var maxHeight = 200;

            var scale = Math.min((double) maxWidth / origWidth,
                    (double) maxHeight / origHeight);
            int subsampling = Math.max(1, (int) Math.ceil(1.0 / scale));

            ImageReadParam param = reader.getDefaultReadParam();
            param.setSourceSubsampling(subsampling, subsampling, 0, 0);

            BufferedImage originalLogo = reader.read(0, param);
            reader.dispose();
            iis.close();

            if (originalLogo == null) return;

            scale = Math.min(
                    (double) maxWidth / originalLogo.getWidth(),
                    (double) maxHeight / originalLogo.getHeight()
            );

            var scaledWidth = Math.max(1, (int) (originalLogo.getWidth() * scale));
            var scaledHeight = Math.max(1, (int) (originalLogo.getHeight() * scale));

            var scaledLogo = new BufferedImage(scaledWidth, scaledHeight,
                    BufferedImage.TYPE_INT_RGB);

            var g = scaledLogo.createGraphics();
            g.setRenderingHint(RenderingHints.KEY_INTERPOLATION,
                    RenderingHints.VALUE_INTERPOLATION_BILINEAR); // BICUBIC dan tez
            g.setRenderingHint(RenderingHints.KEY_RENDERING,
                    RenderingHints.VALUE_RENDER_SPEED);           // tezlik ustuvor
            g.setColor(Color.WHITE);
            g.fillRect(0, 0, scaledWidth, scaledHeight);
            g.drawImage(originalLogo, 0, 0, scaledWidth, scaledHeight, null);
            g.dispose();

            originalLogo.flush();
            originalLogo = null;
            System.gc();

            var centeredLogo = centerImage(scaledLogo);
            scaledLogo.flush();

            this.paint(escpos, centeredLogo);
            centeredLogo.flush();

        } catch (OutOfMemoryError e) {
            log.error("Logo uchun xotira yetmadi, o'tkazib yuborildi");
            System.gc();
        } catch (IOException e) {
            log.error("Failed to print logo: {}", e.getMessage());
        }
    }

    private void paintItems(List<ReceiptProductDataDto> receiptItemData) {
        for (ReceiptProductDataDto item : receiptItemData) {
            var salePrice = DataUtil.format(item.salePrice());
            var totalPrice = DataUtil.format(item.totalPrice());
            var vatSum = DataUtil.format(item.vatSum());
            var discountSum = DataUtil.format(item.discountSum());
            this.newLine(escpos, 50);
            this.render(font2, item.name(), true);
            this.newLine(escpos, 50);
            this.render(font3, String.format("%s * %s = %s", salePrice, item.amount(), totalPrice), true);
            this.renderIfNotEmpty(PrinterConstants.MXIK_CODE, item.mxikCode());
            this.renderIfNotEmpty(PrinterConstants.COMITENT_STIR, item.commissionTin());
            this.renderIfNotEmpty(PrinterConstants.MARK, item.label());
            this.renderIfNotEmpty(PrinterConstants.BARCODE, item.barcode());
            this.render(PrinterConstants.QQS.concat(item.vatPercent().toString()).concat("%:"), vatSum);
            this.renderIfNotEmpty(PrinterConstants.DISCOUNT_SUM, discountSum);
            this.renderIfNotEmpty(PrinterConstants.PACKAGE, item.packageName());
            this.newLine(escpos, 50);
        }
    }

    @SneakyThrows
    private void paintTotal(ReceiptDataDto receiptData) {
        var totalSum = DataUtil.format(receiptData.totalSum());
        var cashSum = DataUtil.format(receiptData.cashSum());
        var cardSum = DataUtil.format(receiptData.cardSum());
        var changeSum = DataUtil.format(receiptData.changeSum());
        var vatSum = DataUtil.format(receiptData.vatSum());
        var receiptType = OPERATION_REFUND.equalsIgnoreCase(receiptData.operationType())
                ? OPERATION_REFUND
                : receiptData.receiptType();

        escpos.writeLF(this.dashedLine());
        this.render(PrinterConstants.TOTAL_SUM, totalSum);
        this.render(PrinterConstants.CASH_SUM, cashSum);
        this.render(PrinterConstants.CARD_SUM, cardSum);

        if (utils.isNotEmpty(receiptData.socialCardNumber())) {
            String maskedCard = PrinterUtil.maskCardNumber(receiptData.socialCardNumber());
            this.render(PrinterConstants.CARD_NUMBER, PrinterConstants.SOCIAL_CARD);
            this.render("", maskedCard);
        } else if (utils.isNotEmpty(receiptData.corporateCardNumber())) {
            this.render(PrinterConstants.CARD_NUMBER, PrinterConstants.CORPORATE_CARD);
        } else if (utils.isNotEmpty(receiptData.cardNumber())) {
            this.render(PrinterConstants.CARD_NUMBER, PrinterConstants.PRIVATE_CARD);
            this.render("", receiptData.cardNumber());
        }

        if (utils.isNotEmpty(receiptData.rrn())) {
            this.render(PrinterConstants.RRN, receiptData.rrn());
        }

        this.render(PrinterConstants.CHANGE_SUM, changeSum);
        this.render(PrinterConstants.VAT_SUM, vatSum);
        this.render(PrinterConstants.RECEIPT_TYPE, receiptType);
    }

    @SneakyThrows
    private void paintFiscalData(ReceiptDataDto receiptData) {
        escpos.writeLF(this.dashedLine());
        this.render(font2, PrinterConstants.FISCAL_DATA, true);
        this.newLine(escpos, 50);
        this.render(font3, PrinterConstants.VIRTUAL_CASH_REGISTER + versionSerial, false);
        this.render(PrinterConstants.TERMINAL_ID, receiptData.terminalId());
        this.render(PrinterConstants.FISCAL_SIGN, receiptData.fiscalSign());
        this.render(PrinterConstants.LICENSE_ID, receiptData.licenseId());
    }

    @SneakyThrows
    private void paintQRCode(String qrcodeUrl) {
        var size = PrinterConstants.QR_CODE_SIZE;
        var bitMatrix = PrinterUtil.generate(qrcodeUrl);
        var qrImage = new BufferedImage(size, size, BufferedImage.TYPE_INT_RGB);
        for (int x = 0; x < size; x++) {
            for (int y = 0; y < size; y++) {
                qrImage.setRGB(x, y, bitMatrix.get(x, y) ? Color.BLACK.getRGB() : Color.WHITE.getRGB());
            }
        }

        var centeredImage = centerImage(qrImage);
        this.paint(escpos, centeredImage);
    }

    private BufferedImage centerImage(BufferedImage image) {
        var xOffset = (width - image.getWidth()) / 2;
        var centeredImage = new BufferedImage(width, image.getHeight(), BufferedImage.TYPE_INT_RGB);
        var graphics = centeredImage.createGraphics();
        graphics.setColor(Color.WHITE);
        graphics.fillRect(0, 0, width, image.getHeight());
        graphics.drawImage(image, xOffset, 0, null);
        graphics.dispose();
        return centeredImage;
    }

    @SneakyThrows
    private void paintFooter(String value) {
        this.renderIfNotEmpty(font3, value, true);
        escpos.feed(3).cut(EscPos.CutMode.FULL);
        escpos.close();
    }

    private void render(Font font, String value, boolean isCentered) {
        var tempImage = new BufferedImage(1, 1, BufferedImage.TYPE_INT_ARGB);
        var tempGraphics = tempImage.createGraphics();
        tempGraphics.setFont(font);
        tempGraphics.dispose();
        var metrics = tempGraphics.getFontMetrics();
        var lines = this.formatByNewLine(metrics, value, width);
        int lineHeight = metrics.getHeight();
        var imageHeight = lineHeight * lines.size();
        var image = new BufferedImage(width, imageHeight, BufferedImage.TYPE_INT_RGB);
        var graphics = this.getGraphics(image, font, imageHeight);

        int x;
        int y = metrics.getAscent();
        for (String line : lines) {
            x = isCentered ? ((width - metrics.stringWidth(line)) / 2) : 0;
            graphics.drawString(line, x, y);
            y += lineHeight;
        }

        graphics.dispose();
        this.paint(escpos, image);
    }

    private void render(String key, String value) {
        var tempImage = new BufferedImage(1, 1, BufferedImage.TYPE_INT_ARGB);
        var tempGraphics = tempImage.createGraphics();
        tempGraphics.setFont(font3);
        tempGraphics.dispose();
        var metrics = tempGraphics.getFontMetrics();
        var maxWidth = width - metrics.stringWidth(key) - 2;
        var wrappedValues = this.formatByNewLine(metrics, value, maxWidth);
        var lineHeight = metrics.getHeight();
        var imageHeight = metrics.getHeight() * wrappedValues.size();
        var image = new BufferedImage(width, imageHeight, BufferedImage.TYPE_INT_RGB);
        var graphics = this.getGraphics(image, font3, imageHeight);
        var x = 0;
        var y = metrics.getAscent();
        var wrappedValue = wrappedValues.get(0);
        var wrappedX = width - metrics.stringWidth(wrappedValue);
        graphics.drawString(key, x, y);
        graphics.drawString(wrappedValue, wrappedX, y);
        y += lineHeight;

        for (int i = 1; i < wrappedValues.size(); i++) {
            wrappedValue = wrappedValues.get(i);
            graphics.drawString(wrappedValue, wrappedX, y);
            y += lineHeight;
        }

        graphics.dispose();
        this.paint(escpos, image);
    }

    private Graphics2D getGraphics(BufferedImage image, Font font, int height) {
        var graphics = image.createGraphics();
        graphics.setFont(font);
        graphics.setColor(Color.WHITE);
        graphics.fillRect(0, 0, width, height);
        graphics.setColor(Color.BLACK);
        return graphics;
    }

    @SneakyThrows
    private void paint(EscPos escpos, BufferedImage image) {
        var escposImage = new EscPosImage(new CoffeeImageImpl(image), new BitonalThreshold());
        var imageWrapper = new RasterBitImageWrapper();
        escpos.write(imageWrapper, escposImage);
    }

    @SneakyThrows
    private void newLine(EscPos escpos, int dots) {
        escpos.getOutputStream().write(new byte[]{0x1B, 'J', (byte) dots});
        escpos.getOutputStream().flush();
    }

    private String dashedLine() {
        var charsPerLine = width / 12;
        return "-".repeat(charsPerLine);
    }

    private List<String> formatByNewLine(FontMetrics metrics, String value, int width) {
        if (utils.isEmpty(value)) return Collections.emptyList();
        value = value.replaceAll("\\s+", " ").trim();
        var list = new ArrayList<String>();

        // Case 1: if the text has spaces → wrap by words
        if (value.contains(" ")) {
            var line = new StringBuilder();
            for (String word : value.split(" ")) {
                if (metrics.stringWidth(line + word) < width) {
                    line.append(word).append(" ");
                } else {
                    list.add(line.toString().trim());
                    line.setLength(0);
                    line.append(word).append(" ");
                }
            }
            if (!line.isEmpty()) list.add(line.toString().trim());
        }
        // Case 2: no spaces (long serial, barcode, etc.) → wrap by characters
        else {
            var line = new StringBuilder();
            for (char c : value.toCharArray()) {
                if (metrics.stringWidth(line.toString() + c) < width) {
                    line.append(c);
                } else {
                    list.add(line.toString());
                    line.setLength(0);
                    line.append(c);
                }
            }
            if (!line.isEmpty()) list.add(line.toString());
        }

        return list;
    }

    private boolean isVirtualPrinter(String printerName) {
        var name = printerName.toLowerCase();
        return name.contains("microsoft print to pdf")
                || name.contains("onenote")
                || name.contains("xps")
                || name.contains("fax")
                || name.contains("adobe pdf")
                || name.contains("foxit")
                || name.contains("cutepdf");
    }

    private boolean isPrinterConnected(PrintService printService) {
        var attributes = printService.getAttributes();
        var printerState = (PrinterState) attributes.get(PrinterState.class);
        return printerState == PrinterState.IDLE || printerState == PrinterState.PROCESSING;
    }

    private Pair<String, String> receiptDate(String receiptDate) {
        var date = LocalDateTime.parse(receiptDate, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        var day = date.format(DateTimeFormatter.ofPattern("dd.MM.yyyy"));
        var time = date.format(DateTimeFormatter.ofPattern("HH:mm:ss"));
        return Pair.of(String.format(PrinterConstants.RECEIPT_DATE, day), String.format(PrinterConstants.RECEIPT_TIME, time));
    }

    private void renderIfNotEmpty(String key, String value) {
        if (value != null && !value.trim().isEmpty()) {
            this.render(key, value);
        }
    }

    private void renderIfNotEmpty(Font font, String value, Boolean isCentered) {
        if (value != null && !value.trim().isEmpty()) {
            this.render(font, value, isCentered);
        }
    }
}
