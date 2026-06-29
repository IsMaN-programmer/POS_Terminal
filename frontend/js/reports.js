const Reports = {
    async generateXReport(startDate, endDate) {
        const orders = await DB.getAll('orders');
        const returns = await DB.getAll('returns');
        const start = startDate ? new Date(startDate) : new Date(new Date().toDateString());
        const end = endDate ? new Date(endDate + 'T23:59:59') : new Date();
        if (!startDate) start.setHours(0, 0, 0, 0);

        let totalRevenue = 0, cashRevenue = 0, cardRevenue = 0, mobileRevenue = 0;
        let orderCount = 0, discountTotal = 0, refundTotal = 0;
        let refundCash = 0, refundCard = 0, refundMobile = 0;
        let openTime = null, closeTime = null;

        orders.forEach(o => {
            const ts = o.timestamp ? new Date(o.timestamp) : new Date(o.date);
            if (ts >= start && ts <= end) {
                orderCount++;
                totalRevenue += (o.total || 0);
                discountTotal += (o.discount || 0);
                if (!openTime || ts < openTime) openTime = ts;
                if (!closeTime || ts > closeTime) closeTime = ts;
                const method = o.paymentType || o.paymentMethod || '';
                if (method === 'cash' || method === 1) {
                    cashRevenue += (o.total || 0);
                } else if (method === 'card' || method === 2) {
                    cardRevenue += (o.total || 0);
                } else if (method === 'mobile' || method === 5) {
                    mobileRevenue += (o.total || 0);
                } else if (method === 'split' && Array.isArray(o.splitPayments)) {
                    o.splitPayments.forEach(p => {
                        const amt = p.amount || 0;
                        if (p.type === 1) cashRevenue += amt;
                        else if (p.type === 2) cardRevenue += amt;
                        else if (p.type === 5) mobileRevenue += amt;
                    });
                }
            }
        });

        returns.forEach(r => {
            const ts = r.createdAt ? new Date(r.createdAt) : (r.created_at ? new Date(r.created_at) : new Date(r.date));
            if (ts >= start && ts <= end) {
                refundTotal += (r.amount || 0);
                if (r.splitPayments) {
                    r.splitPayments.forEach(p => {
                        const amt = p.amount || 0;
                        if (p.type === 1) refundCash += amt;
                        else if (p.type === 2) refundCard += amt;
                        else if (p.type === 5) refundMobile += amt;
                    });
                } else {
                    const method = r.paymentType || '';
                    if (method === 'cash' || method === 1) refundCash += (r.amount || 0);
                    else if (method === 'card' || method === 2) refundCard += (r.amount || 0);
                    else if (method === 'mobile' || method === 5) refundMobile += (r.amount || 0);
                }
            }
        });

        const vatRate = (POS.state && POS.state.vatRate) || 12;
        const salesVat = Math.round((totalRevenue - refundTotal) * vatRate / (100 + vatRate) * 100) / 100;

        totalRevenue -= refundTotal;
        cashRevenue -= refundCash;
        cardRevenue -= refundCard;
        mobileRevenue -= refundMobile;

        return {
            type: 'X-Report',
            date: startDate && endDate ? startDate + ' - ' + endDate : new Date().toLocaleString(),
            cashier: POS.state.cashierName,
            totalRevenue, cashRevenue, cardRevenue, mobileRevenue,
            orderCount, discountTotal, refundTotal,
            refundCash, refundCard, refundMobile,
            salesVat, vatRate,
            openTime: openTime ? openTime.toLocaleString() : '—',
            closeTime: closeTime ? closeTime.toLocaleString() : '—',
        };
    },

    async generateZReport(startDate, endDate) {
        const xReport = await this.generateXReport(startDate, endDate);
        const zReport = { ...xReport, type: 'Z-Report' };
        await DB.put('z_reports', zReport);
        await DB.logAction('Z_REPORT_GENERATED', `Сумма: ${zReport.totalRevenue}`, POS.state.cashierName);
        return zReport;
    },

    printReport(reportData) {
        const win = window.open('', 'report', 'width=420,height=680,menubar=no,toolbar=no');
        if (!win) return;
        const fmt = n => (n || 0).toLocaleString() + ' сум';
        const html = `
            <html><head><title>${reportData.type}</title>
            <style>
                body { font-family: 'Courier New', monospace; font-size: 13px; padding: 16px; margin: 0; }
                h2 { text-align: center; border-bottom: 2px dashed #333; padding-bottom: 8px; margin-bottom: 16px; font-size: 16px; }
                h3 { font-size: 14px; margin: 12px 0 8px; }
                .row { display: flex; justify-content: space-between; margin-bottom: 5px; }
                .bold { font-weight: bold; }
                .divider { border-top: 1px dashed #999; margin: 8px 0; }
                .footer { text-align: center; border-top: 2px dashed #333; padding-top: 12px; margin-top: 20px; font-size: 11px; }
                .col { display: inline-block; width: 48%; vertical-align: top; }
            </style></head>
            <body>
                <h2>${reportData.type}</h2>
                <div class="row"><span>Дата:</span><span>${reportData.date}</span></div>
                <div class="row"><span>Кассир:</span><span>${reportData.cashier}</span></div>
                <div class="row"><span>Открытие:</span><span>${reportData.openTime}</span></div>
                <div class="row"><span>Закрытие:</span><span>${reportData.closeTime}</span></div>
                <div class="divider"></div>
                <div><h3>ПРОДАЖИ</h3>
                    <div class="row"><span>Наличные:</span><span>${fmt(reportData.cashRevenue + reportData.refundCash)}</span></div>
                    <div class="row"><span>Терминал:</span><span>${fmt(reportData.cardRevenue + reportData.refundCard)}</span></div>
                    <div class="row"><span>Payme/Click:</span><span>${fmt(reportData.mobileRevenue + reportData.refundMobile)}</span></div>
                    <div class="row"><span>НДС (${reportData.vatRate}%):</span><span>${fmt(reportData.salesVat)}</span></div>
                    <div class="row bold"><span>Итого продажи:</span><span>${fmt(reportData.totalRevenue + reportData.refundTotal)}</span></div>
                </div>
                <div class="divider"></div>
                <div><h3>ВОЗВРАТЫ</h3>
                    <div class="row"><span>Наличные:</span><span>${fmt(reportData.refundCash)}</span></div>
                    <div class="row"><span>Терминал:</span><span>${fmt(reportData.refundCard)}</span></div>
                    <div class="row"><span>Payme/Click:</span><span>${fmt(reportData.refundMobile)}</span></div>
                    <div class="row bold"><span>Итого возвраты:</span><span>${fmt(reportData.refundTotal)}</span></div>
                </div>
                <div class="divider"></div>
                <div><h3>ИТОГО</h3>
                    <div class="row"><span>Чеков:</span><span>${reportData.orderCount}</span></div>
                    <div class="row"><span>Наличные:</span><span>${fmt(reportData.cashRevenue)}</span></div>
                    <div class="row"><span>Безналичные:</span><span>${fmt(reportData.cardRevenue + reportData.mobileRevenue)}</span></div>
                    <div class="row"><span>Скидки:</span><span>${fmt(reportData.discountTotal)}</span></div>
                    <div class="row bold"><span>ИТОГО ВЫРУЧКА:</span><span>${fmt(reportData.totalRevenue)}</span></div>
                </div>
                <div class="footer">* Конец отчета *</div>
                <script>setTimeout(() => { window.print(); window.close(); }, 500);</script>
            </body></html>`;
        win.document.write(html);
        win.document.close();
    },

    async getXReportsHistory() {
        const orders = await DB.getAll('orders');
        const returns = await DB.getAll('returns');
        const days = {};
        orders.forEach(o => {
            const ts = o.timestamp ? new Date(o.timestamp) : new Date(o.date);
            const day = ts.toISOString().slice(0, 10);
            if (!days[day]) days[day] = { orders: [], returns: [] };
            days[day].orders.push(o);
        });
        returns.forEach(r => {
            const ts = r.createdAt ? new Date(r.createdAt) : (r.created_at ? new Date(r.created_at) : new Date(r.date));
            const day = ts.toISOString().slice(0, 10);
            if (!days[day]) days[day] = { orders: [], returns: [] };
            days[day].returns.push(r);
        });
        return Object.entries(days).sort((a, b) => b[0].localeCompare(a[0]));
    },
};

window.Reports = Reports;
