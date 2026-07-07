

const FiscalAPI = {

    errorMessages: {
        auth_unauthorized: 'Неверный или истёкший JWT токен. Требуется повторный вход.',
        user_not_found: 'Имя пользователя не найдено в системе.',
        input_cannot_be_null: 'Обязательное поле отсутствует.',
        data_not_found: 'Запрашиваемый ресурс не существует.',
        id_must_not_be_null: 'Поле id не передано в теле запроса.',
        max_decimal_increased: 'В поле amount более 2 знаков после запятой.',
        offline_for_more_than_1_day: 'Приложение без интернета более 24 часов. Выполните синхронизацию с OFD.',
        product_has_been_sold: 'Остаток товара равен 0. Нельзя добавить в чек.',
        empty_receipt_exists: 'Пустой чек уже существует. Используйте или удалите его.',
        receipt_already_refunded: 'По этому чеку уже оформлен возврат.',
        exists_unsent_receipt_to_ofd: 'Есть неотправленные чеки. Выполните синхронизацию с OFD.',
        label_does_not_match_product: 'Код маркировки не соответствует штрих-коду товара.',
        internet_is_not_available: 'Нет интернета. Операция требует подключения к OFD.',
        product_already_exists: 'Товар уже добавлен в чек.',
        active_printer_not_found: 'Принтер не настроен. Настройте принтер в разделе Администрирование.',
        active_terminal_not_found: 'PinPad не подключён (требуется для Humo/Социальная карта).',
        receipt_does_not_have_products: 'Нельзя зарегистрировать пустой чек. Добавьте товары.',
        avans_receipt_cannot_be_refunded: 'Авансовые чеки нельзя вернуть через стандартный механизм.',
        unknown_error: 'Неожиданная ошибка сервера. Проверьте логи приложения.',
        method_not_allowed: 'Использован неверный HTTP метод для данного эндпоинта.',
    },

    _errorMessage(code, fallback) {
        return this.errorMessages[code] || fallback || 'Неизвестная ошибка (код: ' + code + ')';
    },

    config: {
        vcrUrl: 'http://127.0.0.1:5614',
        vcrDriverUrl: 'http://127.0.0.1:5614',
        vcrUsername: 'isardor',
        vcrPassword: 'sardor123',
        vcrTerminalId: 'LG420211640998',
        vcrEnabled: true,          
        timeout: 15000,            
        mockMode: false,            
        vcrFiscalModuleFactoryId: '',

        token: '',                 
    },

    _state: {
        connected: false,
        terminalId: null,
    },

    async _login() {
        if (this.config.mockMode || !this.config.vcrEnabled) {
            console.log('[ФискалAPI] 🧪 Эмуляция входа в систему...');
            this.config.token = 'MOCK-JWT-TOKEN-' + Date.now();
            return true;
        }

        try {
            console.log('[ФискалAPI] 🔑 Попытка авторизации в ВКК...');
            const resp = await fetch(`${this.config.vcrUrl}/api/v1/user/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.config.vcrUsername,
                    password: this.config.vcrPassword,
                    terminalId: this.config.vcrTerminalId
                })
            });

            if (resp.ok) {
                const json = await resp.json();
                if (json.success && json.data) {
                    this.config.token = json.data;
                    console.log('[ФискалAPI] ✅ Авторизация успешна. JWT токен получен.');
                    return true;
                }
            }

            console.error('[ФискалAPI] ❌ Ошибка авторизации. Код ответа:', resp.status);
            return false;
        } catch (e) {
            console.error('[ФискалAPI] ❌ Не удалось подключиться для авторизации:', e.message);
            return false;
        }
    },

    async _request(method, path, body = null, skipAuth = false) {
        if (this.config.mockMode || !this.config.vcrEnabled) {
            throw new Error('Включен режим эмуляции');
        }

        if (!skipAuth && !this.config.token) {
            await this._login();
        }

        const makeFetch = async () => {
            const url = `${this.config.vcrUrl}${path}`;
            const headers = {
                'Content-Type': 'application/json',
                'Accept-Language': 'ru'
            };
            if (this.config.token && !skipAuth) {
                headers['Authorization'] = `Bearer ${this.config.token}`;
            }

            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), this.config.timeout);

            try {
                const opt = {
                    method: method,
                    headers: headers,
                    signal: controller.signal
                };
                if (body) opt.body = JSON.stringify(body);

                const resp = await fetch(url, opt);
                clearTimeout(timer);

                if (resp.status === 401) {
                    return { success: false, error: { code: 'auth_unauthorized' } };
                }

                if (resp.ok) {
                    try {
                        return await resp.json();
                    } catch (_) {
                        return { success: true, data: null };
                    }
                } else {
                    try {
                        return await resp.json();
                    } catch (_) {
                        return { success: false, error: { code: 'http_error', errorMessage: `HTTP ${resp.status}: ${resp.statusText}` } };
                    }
                }
            } catch (e) {
                clearTimeout(timer);
                throw e;
            }
        };

        try {
            let res = await makeFetch();
            
            if (!skipAuth && res && res.error && res.error.code === 'auth_unauthorized') {
                console.log('[ФискалAPI] 🔑 Сессия истекла. Обновление токена...');
                const loginSuccess = await this._login();
                if (loginSuccess) {
                    res = await makeFetch();
                }
            }
            return res;
        } catch (err) {
            console.warn(`[ФискалAPI] ⚠️ Сетевая ошибка на эндпоинте ${path}:`, err.message);
            throw err;
        }
    },

    async checkStatus() {
        if (!this.config.vcrEnabled) {
            this._state.connected = false;
            this._state.terminalId = null;
            return {
                connected: false,
                terminalId: null,
                fmVersion: 'Отключено',
                ofdConnected: false,
                unsentCount: 0,
                forceUpdate: false,
                systemInfo: null,
                userStatus: null
            };
        }
        if (this.config.mockMode) {
            this._state.connected = true;
            this._state.terminalId = 'UZ-MOCK-FM3-001';
            return {
                connected: true,
                terminalId: 'UZ-MOCK-FM3-001',
                fmVersion: 'ВКК REST (эмуляция)',
                ofdConnected: true,
                unsentCount: 0,
                forceUpdate: false,
                systemInfo: null,
                userStatus: null
            };
        }

        try {
            const sysRes = await this._request('GET', '/api/v1/system', null, false);
            if (sysRes?.success && sysRes.data?.forceUpdate) {
                console.error('[ФискалAPI] 🚨 Требуется обязательное обновление ВКК!');
                return {
                    connected: false,
                    terminalId: '',
                    fmVersion: '',
                    ofdConnected: false,
                    unsentCount: 0,
                    forceUpdate: true,
                    systemInfo: sysRes.data,
                    userStatus: null
                };
            }

            const fmRes = await this._request('GET', '/api/v1/fiscal-module', null, true);
            let termId = this.config.vcrTerminalId;
            let fmConnected = false;
            let factoryId = this.config.vcrFiscalModuleFactoryId || '';
            if (fmRes && fmRes.success && Array.isArray(fmRes.data) && fmRes.data.length > 0) {
                fmConnected = true;
                if (!factoryId) factoryId = fmRes.data[0].FactoryID || fmRes.data[0].factoryId || '';
                if (!factoryId) factoryId = fmRes.data[0].FactoryID || '';
                const fmTermId = fmRes.data[0].TerminalID || fmRes.data[0].terminalId || '';
                if (fmTermId) termId = fmTermId;
            }
            if (!termId && factoryId) {
                try {
                    const info = await this.getFiscalModuleInfo(factoryId);
                    if (info && info.terminalId) {
                        termId = info.terminalId;
                        this.config.vcrTerminalId = info.terminalId;
                    }
                } catch (_) {}
            }

            const userRes = await this._request('GET', '/api/v1/user');
            const userValid = !!(userRes && (userRes.data?.terminalId || userRes.terminalId));

            const connected = fmConnected && userValid;

            this._state.connected = connected;
            this._state.terminalId = termId;

            let unsentCount = 0;
            if (connected) {
                try {
                    const unackRes = await this._request('GET', '/api/v1/fiscal-module/receipts/un-acknowledged');
                    if (unackRes?.success && typeof unackRes.data === 'number') unsentCount = unackRes.data;
                } catch (_) {}
            }

            const userData = userRes?.data;
            const ofdConnected = userData ? (userData.statusCode === 200 && !userData.locked) : false;

            if (userData && (userData.statusCode !== 200 || userData.locked)) {
                const msg = userData.locked ? 'Аккаунт заблокирован' : (userData.statusMessage || 'Статус аккаунта: ' + userData.statusCode);
                console.warn('[ФискалAPI] ⚠️', msg);
            }

            return {
                connected: connected,
                terminalId: termId,
                fmVersion: 'Виртуальная касса (ВКК)',
                ofdConnected: ofdConnected,
                unsentCount: unsentCount,
                forceUpdate: false,
                systemInfo: null,
                userStatus: userData ? { statusCode: userData.statusCode, locked: userData.locked, statusMessage: userData.statusMessage } : null
            };
        } catch (e) {
            console.warn('[ФискалAPI] ❌ Виртуальная касса недоступна:', e.message);
            this._state.connected = false;
            return {
                connected: false,
                terminalId: '',
                fmVersion: '',
                ofdConnected: false,
                unsentCount: 0,
                forceUpdate: false,
                systemInfo: null,
                userStatus: null
            };
        }
    },

    async getFiscalModuleInfo(factoryId) {
        if (!factoryId) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/FiscalDrive/FiscalMemory/Info/${factoryId}`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            const info = data?.data || data || {};
            return {
                terminalId: info.TerminalID || info.terminalId || info.terminal_id || '',
                cplc: info.CPLC || info.cplc || '',
                locked: info.Locked || info.locked || false,
                appletVersion: info.AppletVersion || info.appletVersion || '',
                mode: info.Mode ?? info.mode,
                posAuth: info.POSAuth ?? info.posAuth ?? false,
                posLocked: info.POSLocked ?? info.posLocked ?? false,
                raw: info
            };
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось получить информацию о ФМ:', e.message);
            return null;
        }
    },

    async getFiscalDriveInfo(factoryId) {
        if (!factoryId) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/FiscalDrive/Info/${factoryId}`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            const list = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : []);
            return list.length > 0 ? {
                description: list[0].Description || list[0].description || '',
                factoryId: list[0].FactoryID || list[0].factoryId || '',
                readerName: list[0].ReaderName || list[0].readerName || '',
                atr: list[0].ATR || list[0].atr || '',
                raw: list[0]
            } : null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось получить информацию о драйвере ФМ:', e.message);
            return null;
        }
    },

    async fiscalDriveZReportOpen(factoryId) {
        if (!factoryId) return false;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/FiscalDrive/ZReport/Open/${factoryId}`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            return res.ok;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка открытия Z-отчёта:', e.message);
            return false;
        }
    },

    async fiscalDriveZReportClose(factoryId) {
        if (!factoryId) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/FiscalDrive/ZReport/Close/${factoryId}`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            const info = data?.data || data || {};
            return {
                openTime: info.OpenTime || info.openTime || '',
                closeTime: info.CloseTime || info.closeTime || '',
                firstReceiptSeq: info.FirstReceiptSeq ?? info.firstReceiptSeq,
                lastReceiptSeq: info.LastReceiptSeq ?? info.lastReceiptSeq,
                terminalId: info.TerminalID || info.terminalId || '',
                totalSaleCount: info.TotalSaleCount ?? info.totalSaleCount,
                totalRefundCount: info.TotalRefundCount ?? info.totalRefundCount,
                totalCash: info.TotalCash || info.totalCash || {},
                totalCard: info.TotalCard || info.totalCard || {},
                totalVAT: info.TotalVAT || info.totalVAT || {},
                raw: info
            };
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка закрытия Z-отчёта:', e.message);
            return null;
        }
    },

    async fiscalDriveZReportInfo(factoryId) {
        if (!factoryId) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/FiscalDrive/ZReport/Info/${factoryId}`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            return await res.json();
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка получения информации о Z-отчёте:', e.message);
            return null;
        }
    },

    async fiscalDriveSyncZReports(factoryId) {
        if (!factoryId) return false;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/DataBase/Files/Sync/ZReports/${factoryId}`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            return res.ok;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка синхронизации Z-отчётов:', e.message);
            return false;
        }
    },

    async fiscalDriveDBResendFullReceipts(factoryId) {
        if (!factoryId) return false;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/DataBase/Files/Resend/FullReceipts/${factoryId}`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            return res.ok;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка переотправки полных чеков:', e.message);
            return false;
        }
    },

    async registerReceipt(receipt) {
        console.log('[ФискалAPI] 🧾 Регистрация чека в ВКК:', receipt.receiptId);

        if (this.config.mockMode || !this.config.vcrEnabled) {
            return this._generateMockReceipt(receipt);
        }

        try {
            
            if (!this.config.token) {
                await this._login();
            }

            const factoryId = this.config.vcrFiscalModuleFactoryId || '';

            let shiftRes = await this._request('GET', '/api/v1/shift');
            let shiftId = null;
            if (shiftRes && shiftRes.success && shiftRes.data) {
                shiftId = shiftRes.data.id;
            } else {
                console.log('[ФискалAPI] 📂 Смена в ВКК закрыта. Открываем новую...');
                const openShiftRes = await this._request('POST', '/api/v1/shift/open');
                if (openShiftRes && openShiftRes.success) {
                    shiftId = openShiftRes.data;
                }
            }
            if (!shiftId) throw new Error('Не удалось получить или открыть смену в ВКК');

            const zInfo = await this._request('GET', '/api/v1/fiscal-module/z-report/info?Index=0');
            const zData = zInfo?.data || zInfo || {};
            const zOpenTime = zData.OpenTime || zData.openTime || zData.openedTime || '';
            const zCloseTime = zData.CloseTime || zData.closeTime || zData.closedTime || '';
            if (!zOpenTime || zCloseTime) {
                console.log('[ФискалAPI] 📊 Z-отчёт на ФМ закрыт или не открыт. Открываем...');
                const opened = await this._request('GET', '/api/v1/fiscal-module/z-report/open');
                if ((!opened || !opened.success) && factoryId) {
                    console.log('[ФискалAPI] 📊 Пробуем открыть Z-отчёт напрямую через драйвер...');
                    await this.fiscalDriveZReportOpen(factoryId);
                }
                const reopenCheck = await this._request('GET', '/api/v1/fiscal-module/z-report/info?Index=0');
                const reData = reopenCheck?.data || reopenCheck || {};
                const reClosed = reData.CloseTime || reData.closeTime || reData.closedTime || '';
                if (reClosed) {
                    console.warn('[ФискалAPI] ⚠️ Z-отчёт всё ещё закрыт. Пробуем повторно через драйвер...');
                    if (factoryId) await this.fiscalDriveZReportOpen(factoryId);
                }
            }

            const drafts = await this._request('GET', `/api/v1/receipt?shiftId=${shiftId}`);
            if (drafts && drafts.success && drafts.data && Array.isArray(drafts.data.receiptDto)) {
                for (const d of drafts.data.receiptDto) {
                    console.log('[ФискалAPI] 🗑️ Удаление старого черновика:', d.id);
                    await this._request('DELETE', `/api/v1/receipt/${d.id}`);
                }
            }

            const newRecRes = await this._request('POST', '/api/v1/receipt', { shiftId: shiftId });
            if (!newRecRes || !newRecRes.success || !newRecRes.data) {
                throw new Error(this._errorMessage(newRecRes?.error?.code, newRecRes?.error?.errorMessage || 'Не удалось создать чек'));
            }
            const receiptId = newRecRes.data.receiptId;

            const existingProds = await this._request('GET', `/api/v1/receipt-product?receiptId=${receiptId}&size=1000`);
            if (existingProds && existingProds.success && Array.isArray(existingProds.data) && existingProds.data.length > 0) {
                console.log('[ФискалAPI] 🧹 Очистка существующих товаров в чеке:', existingProds.data.length);
                for (const ep of existingProds.data) {
                    await this._request('DELETE', `/api/v1/receipt-product/${ep.id}`);
                }
            }

            for (const item of receipt.items) {
                
                let productId = null;

                if (item.markingCode) {
                    try {
                        const digits = item.markingCode.replace(/\D/g, '');
                        const gtin = digits.length >= 16 ? digits.substring(2, 16) : digits.slice(0, 14);
                        const barcode13 = gtin.length === 14 ? gtin.replace(/^0/, '') : gtin;
                        const bcRes = await this._request('GET', `/api/v1/product?page=1&size=1&barcode=${encodeURIComponent(barcode13)}`);
                        if (bcRes && bcRes.success && bcRes.data && bcRes.data.length > 0) {
                            productId = bcRes.data[0].id;
                            console.log(`[ФискалAPI] 🔍 Товар найден по barcode ${barcode13}: id=${productId}`);
                        }
                    } catch (_) {}
                }

                if (!productId) {
                    try {
                        let nameQuery = encodeURIComponent(item.name.replace(/\(.*?\)/g, '').trim().slice(0, 30));
                        let searchRes = await this._request('GET', `/api/v1/product?page=1&size=5&name=${nameQuery}`);
                        if ((!searchRes || !searchRes.success || !searchRes.data || searchRes.data.length === 0) && item.mxikCode) {
                            nameQuery = encodeURIComponent(item.name.replace(/[^a-zA-Z0-9\s.]/g, ' ').trim().slice(0, 30));
                            if (nameQuery) {
                                searchRes = await this._request('GET', `/api/v1/product?page=1&size=5&name=${nameQuery}`);
                            }
                        }
                        if (searchRes && searchRes.success && searchRes.data && searchRes.data.length > 0) {
                            if (searchRes.data.length === 1) {
                                productId = searchRes.data[0].id;
                            } else {
                                const match = searchRes.data.find(p => p.mxikCode === item.mxikCode);
                                productId = match ? match.id : searchRes.data[0].id;
                            }
                        }
                    } catch (_) {}
                }

                if (!productId && item.mxikCode) {
                    try {
                        const mxikRes = await this._request('GET', `/api/v1/product?page=1&size=1&mxikCode=${encodeURIComponent(item.mxikCode)}`);
                        if (mxikRes && mxikRes.success && mxikRes.data && mxikRes.data.length > 0) {
                            productId = mxikRes.data[0].id;
                        }
                    } catch (_) {}
                }

                if (!productId) {
                    try {
                        const fallbackRes = await this._request('GET', '/api/v1/product?page=1&size=1');
                        if (fallbackRes && fallbackRes.success && fallbackRes.data && fallbackRes.data.length > 0) {
                            productId = fallbackRes.data[0].id;
                        }
                    } catch (_) {}
                }

                if (!productId) {
                    console.warn('[ФискалAPI] ⚠️ Нет доступных товаров в ВКК, пропускаем товар:', item.name);
                    continue;
                }

                const prodPayload = {
                    receiptId: receiptId,
                    productId: productId,
                    amount: item.quantity,
                    salePrice: item.price,     
                    totalPrice: item.total,
                    discountSum: item.discountSum || 0,
                    label: item.markingCode || undefined
                };

                console.log(`[ФискалAPI] 📦 Добавление товара: ${item.name} (x${item.quantity})`);
                let addRes = await this._request('POST', '/api/v1/receipt-product', prodPayload);
                if (!addRes || !addRes.success) {
                    const errCode = addRes?.error?.code;
                    const errMsg = addRes?.error?.errorMessage || '';
                    if (errCode === 'product_already_exists' || errMsg.toLowerCase().includes('mavjud')) {
                        console.warn('[ФискалAPI] ⚠️ Товар уже есть в чеке, удаляем дубликаты и пробуем снова');
                        const existing = await this._request('GET', `/api/v1/receipt-product?receiptId=${receiptId}&size=1000`);
                        if (existing && existing.success && Array.isArray(existing.data)) {
                            for (const ep of existing.data) {
                                await this._request('DELETE', `/api/v1/receipt-product/${ep.id}`);
                            }
                        }
                        addRes = await this._request('POST', '/api/v1/receipt-product', prodPayload);
                    }
                }
                if (!addRes || !addRes.success) {
                    throw new Error(`Ошибка добавления "${item.name}": ` + this._errorMessage(addRes?.error?.code, addRes?.error?.errorMessage || 'unknown'));
                }
            }

            const paymentsArray = receipt.payments.map(p => {
                let paymentTypeId = 1;
                let merchantId = undefined;
                if (p.type === 1) {
                    paymentTypeId = 1; 
                } else if (p.type === 2) {
                    paymentTypeId = 2; 
                } else if (p.type === 5) {
                    paymentTypeId = 3; 
                    merchantId = p.merchantId || 1;    
                }
                const payEntry = {
                    paymentTypeId: paymentTypeId,
                    paidSum: p.amount,
                };
                if (merchantId !== undefined) payEntry.merchantId = merchantId;
                return payEntry;
            });

            const payPayload = {
                receiptId: receiptId,
                totalPaidSum: receipt.tenderedSum || receipt.totalSum,
                payments: paymentsArray
            };

            console.log('[ФискалAPI] 💵 Проведение оплаты...');
            const payRes = await this._request('POST', '/api/v1/payment', payPayload);
            if (!payRes || !payRes.success) {
                throw new Error('Ошибка оплаты: ' + this._errorMessage(payRes?.error?.code, payRes?.error?.errorMessage || 'unknown'));
            }

            let receiptTypeId = 0;
            try {
                const typeRes = await this._request('GET', `/api/v1/receipt-product/operation-type/${receiptId}`);
                if (typeRes && typeRes.success && typeRes.data) {
                    receiptTypeId = typeRes.data.SALE !== undefined ? typeRes.data.SALE : (typeRes.data.receiptTypeId !== undefined ? typeRes.data.receiptTypeId : 0);
                }
            } catch (_) {}

            console.log('[ФискалAPI] 🔑 Запуск фискализации...');
            let regRes = await this._request('POST', '/api/v1/receipt/register', {
                id: receiptId,
                receiptTypeId: receiptTypeId,
                operationTypeId: 0 
            });

            if (!regRes || !regRes.success) {
                const errCode = regRes?.error?.code || '';
                if (errCode === '9023' || errCode === 'ZREPORT_IS_ALREADY_CLOSED' || (regRes?.error?.errorMessage || '').includes('ZREPORT_IS_ALREADY_CLOSED')) {
                    console.warn('[ФискалAPI] ⚠️ Z-отчёт закрыт при попытке регистрации. Открываем и повторяем...');
                    await this._request('GET', '/api/v1/fiscal-module/z-report/open');
                    if (factoryId) await this.fiscalDriveZReportOpen(factoryId);
                    regRes = await this._request('POST', '/api/v1/receipt/register', {
                        id: receiptId,
                        receiptTypeId: receiptTypeId,
                        operationTypeId: 0
                    });
                }
            }

            if (!regRes || !regRes.success) {
                throw new Error('Ошибка фискализации: ' + this._errorMessage(regRes?.error?.code, regRes?.error?.errorMessage || 'unknown'));
            }

            const detailsRes = await this._request('GET', `/api/v1/receipt/details/${receiptId}`);
            let details;
            if (detailsRes && detailsRes.success && detailsRes.data) {
                details = detailsRes.data;
            } else if (detailsRes && detailsRes.first) {
                details = detailsRes;
            } else {
                throw new Error('Не удалось получить детали чека от ВКК');
            }
            const first = details.first || {};
            
            return {
                success: true,
                fiscalSign: first.fiscalSign || `VCR-${receiptId.slice(-8)}`,
                qrCodeUrl: first.qrcodeUrl || first.qrCodeUrl || `https://ofd.soliq.uz/check?t=${this.config.vcrTerminalId}&c=${first.receiptSeq}&s=${first.totalSum}&f=${first.fiscalSign}`,
                receiptNumber: String(first.receiptSeq || receiptId.slice(-6)),
                receiptSeq: first.receiptSeq,
                terminalId: first.terminalId || this.config.vcrTerminalId,
                licenseId: first.licenseId || null,
                error: null,
                vcrReceiptId: receiptId
            };

        } catch (error) {
            console.error('[ФискалAPI] ❌ Критическая ошибка интеграции:', error.message);
            console.warn('[ФискалAPI] 🧪 Генерация офлайн-чека из-за ошибки.');
            const fallback = this._generateMockReceipt(receipt);
            fallback.success = false;
            fallback.offline = true;
            fallback.error = error.message;
            return fallback;
        }
    },

    async closeShift() {
        console.log('[ФискалAPI] 📋 Закрытие смены и Z-отчет...');

        if (this.config.mockMode || !this.config.vcrEnabled) {
            return {
                success: true,
                shiftNumber: Math.floor(Math.random() * 1000) + 1,
                totalReceipts: 1,
                totalSum: 0,
                error: null
            };
        }

        try {
            const factoryId = this.config.vcrFiscalModuleFactoryId || '';
            
            let shiftRes = await this._request('GET', '/api/v1/shift');
            let shiftId = null;
            if (shiftRes && shiftRes.success && shiftRes.data) {
                shiftId = shiftRes.data.id;
            }

            console.log('[ФискалAPI] 📊 Закрытие Z-отчета...');
            const zCloseRes = await this._request('GET', '/api/v1/fiscal-module/z-report/close');
            if (!zCloseRes && factoryId) {
                console.log('[ФискалAPI] 📊 Пробуем закрыть Z-отчёт напрямую через драйвер...');
                await this.fiscalDriveZReportClose(factoryId);
            }

            if (shiftId) {
                console.log('[ФискалAPI] 📂 Закрытие смены в кассе...');
                await this._request('PUT', `/api/v1/shift/close/${shiftId}`);
            }

            if (factoryId) {
                console.log('[ФискалAPI] 🔄 Синхронизация Z-отчётов с ФМ...');
                await this.fiscalDriveSyncZReports(factoryId);
            }

            return {
                success: true,
                shiftNumber: 1,
                totalReceipts: 0,
                totalSum: 0,
                error: null
            };

        } catch (e) {
            console.error('[ФискалAPI] ❌ Ошибка при закрытии смены:', e.message);
            return {
                success: false,
                shiftNumber: 0,
                totalReceipts: 0,
                totalSum: 0,
                error: e.message
            };
        }
    },

    sumToTiyin(sum) { return Math.round(sum * 100); },
    tiyinToSum(tiyin) { return tiyin / 100; },

    formatMoney(sum) {
        if (sum == null || isNaN(sum)) return '0';
        const parts = Number(sum).toFixed(0).split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    },

    formatTiyin(tiyin) { return this.formatMoney(this.tiyinToSum(tiyin)); },

    generateQRUrl(terminalId, receiptSeq, code, sign) {
        return `https://ofd.soliq.uz/check?t=${encodeURIComponent(terminalId)}&r=${encodeURIComponent(receiptSeq)}&c=${encodeURIComponent(code)}&s=${encodeURIComponent(sign)}`;
    },

    generateReceiptId() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const date = `${year}${month}${day}`;
        const seq = String(Math.floor(Math.random() * 9999) + 1).padStart(4, '0');
        return `POS-${date}-${seq}`;
    },

    getPaymentTypeName(type) {
        const types = {
            1: 'Наличные',
            2: 'Банковская карта (Uzcard/Humo)',
            3: 'Предоплата',
            4: 'Кредит',
            5: 'Электронные (Payme/Click/Uzum)',
        };
        return types[type] || `Неизвестный тип (${type})`;
    },

    _generateMockReceipt(receipt) {
        const mockTerminalId = this.config.vcrTerminalId || 'UZ-MOCK-FM3-001';
        const timestamp = Date.now();
        const fiscalSign = `MOCK${String(timestamp).slice(-12)}`;
        const receiptSeq = String(timestamp).slice(-8);
        const code = String(Math.floor(Math.random() * 999999)).padStart(6, '0');

        const result = {
            success: true,
            fiscalSign: fiscalSign,
            qrCodeUrl: this.generateQRUrl(mockTerminalId, receiptSeq, code, fiscalSign),
            receiptNumber: `MOCK-${String(timestamp).slice(-6)}`,
            receiptSeq: receiptSeq,
            terminalId: mockTerminalId,
            licenseId: null,
            error: null,
            vcrReceiptId: `MOCK-REC-${receiptSeq}`
        };

        console.warn('[ФискалAPI] 🧪 ЭМУЛЯЦИЯ чека:');
        console.warn('[ФискалAPI] 🔑 Фискальная подпись:', result.fiscalSign);
        console.warn('[ФискалAPI] 📱 QR-код:', result.qrCodeUrl);

        return result;
    },

    async getFiscalModuleList() {
        // Try REST API first (no auth required for module enumeration)
        try {
            const restRes = await this._request('GET', '/api/v1/fiscal-module', null, true);
            if (restRes && restRes.success && Array.isArray(restRes.data) && restRes.data.length > 0) {
                return restRes.data.map(fm => ({
                    atr: fm.ATR || '',
                    appletVersion: fm.AppletVersion || '',
                    description: fm.Description || fm.description || '',
                    factoryId: fm.FactoryID || fm.factoryId || '',
                    readerName: fm.ReaderName || fm.readerName || '',
                    terminalId: fm.TerminalID || fm.terminalId || ''
                }));
            }
        } catch (e) {
            console.warn('[ФискалAPI] REST API модулей недоступен, пробуем драйвер:', e.message);
        }

        // Fall back to driver API
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/FiscalDrive/List`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            const list = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : []);
            return list.map(fm => ({
                atr: fm.ATR || '',
                appletVersion: fm.AppletVersion || '',
                description: fm.Description || '',
                factoryId: fm.FactoryID || '',
                readerName: fm.ReaderName || ''
            }));
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось получить список ФМ:', e.message);
            return [];
        }
    },

    async fiscalDriveDBFileCount() {
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/DataBase/Files/Count`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            return data?.data ?? data ?? null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось получить количество файлов БД:', e.message);
            return null;
        }
    },

    async fiscalDriveDBFileList(factoryId, limit = 10, offset = 0) {
        if (!factoryId) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/DataBase/Files/List/${factoryId}/${limit}/${offset}`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const json = await res.json();
            return json?.data || json || null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось получить список файлов БД:', e.message);
            return null;
        }
    },

    async fiscalDriveDBStatusReset() {
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/DataBase/Files/Status/Reset`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const json = await res.json();
            return json?.data || json || null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось сбросить статус БД:', e.message);
            return null;
        }
    },

    /* ---- POS Auth endpoints ---- */
    async posChallenge(factoryId) {
        if (!factoryId) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/POS/Challenge/${factoryId}`, {
                method: 'GET', headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            return data?.data ?? data ?? null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка POS/Challenge:', e.message);
            return null;
        }
    },

    async posAuth(factoryId) {
        if (!factoryId) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/POS/Auth/${factoryId}`, {
                method: 'GET', headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            return data?.data ?? data ?? null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка POS/Auth:', e.message);
            return null;
        }
    },

    async posLock(factoryId, receiptData) {
        if (!factoryId || !receiptData) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/POS/Lock/${factoryId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(receiptData)
            });
            if (!res.ok) return null;
            const data = await res.json();
            return data?.data ?? data ?? null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка POS/Lock:', e.message);
            return null;
        }
    },

    async authSignChallenge(factoryId) {
        if (!factoryId) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/Auth/SignChallenge/${factoryId}`, {
                method: 'GET', headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            return data?.data ?? data ?? null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка Auth/SignChallenge:', e.message);
            return null;
        }
    },

    /* ---- FiscalDrive State & Receipt endpoints ---- */
    async fiscalDriveStateSync(factoryId) {
        if (!factoryId) return false;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/FiscalDrive/State/Sync/${factoryId}`, {
                method: 'GET', headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            return data?.data ?? data ?? null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка FiscalDrive/State/Sync:', e.message);
            return null;
        }
    },

    async fiscalDriveReceiptGetTXID(factoryId) {
        if (!factoryId) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/FiscalDrive/Receipt/GetTXID/${factoryId}`, {
                method: 'GET', headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            const info = data?.data || data || {};
            return {
                receiptSeq: info.ReceiptSeq ?? info.receiptSeq,
                fiscalSign: info.FiscalSign || info.fiscalSign || '',
                operationType: info.OperationType || info.operationType || '',
                receiptType: info.ReceiptType || info.receiptType || '',
                receivedCash: info.ReceivedCash ?? info.receivedCash,
                receivedCard: info.ReceivedCard ?? info.receivedCard,
                totalVAT: info.TotalVAT ?? info.totalVat ?? info.totalVAT,
                terminalId: info.TerminalID || info.terminalId || '',
                time: info.Time || info.time || '',
                itemsCount: info.ItemsCount ?? info.itemsCount,
                itemsHash: info.ItemsHash || info.itemsHash || '',
                extra: info.Extra || info.extra || ''
            };
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка FiscalDrive/Receipt/GetTXID:', e.message);
            return null;
        }
    },

    async fiscalDriveReceiptInfo(factoryId) {
        if (!factoryId) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/FiscalDrive/Receipt/Info/${factoryId}`, {
                method: 'GET', headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            return data?.data ?? data ?? null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка FiscalDrive/Receipt/Info:', e.message);
            return null;
        }
    },

    async fiscalDriveReceiptRegisterTXID(factoryId) {
        if (!factoryId) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/FiscalDrive/Receipt/RegisterTXID/${factoryId}`, {
                method: 'GET', headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            return data?.data ?? data ?? null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка FiscalDrive/Receipt/RegisterTXID:', e.message);
            return null;
        }
    },

    /* ---- ZReport extra endpoints ---- */
    async fiscalDriveZReportUnacknowledgedIndexes(factoryId) {
        if (!factoryId) return null;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/FiscalDrive/ZReport/UnackowledgedIndexes/${factoryId}`, {
                method: 'GET', headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const data = await res.json();
            return data?.data ?? data ?? null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка ZReport/UnackowledgedIndexes:', e.message);
            return null;
        }
    },

    async fiscalDriveSyncFullReceipts(factoryId) {
        if (!factoryId) return false;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/DataBase/Files/Sync/FullReceipts/${factoryId}`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            return res.ok;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка синхронизации полных чеков:', e.message);
            return false;
        }
    },

    async fiscalDriveSyncReceipts(factoryId) {
        if (!factoryId) return false;
        try {
            const base = (this.config.vcrDriverUrl || this.config.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const res = await fetch(`${base}/DataBase/Files/Sync/Receipts/${factoryId}`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return null;
            const json = await res.json();
            return json?.data || json || null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка синхронизации чеков:', e.message);
            return null;
        }
    },

    async getPrinters() {
        if (this.config.mockMode || !this.config.vcrEnabled) return [];
        try {
            const res = await this._request('GET', '/api/v1/printer');
            if (res?.success && Array.isArray(res.data)) return res.data;
            return [];
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось получить список принтеров:', e.message);
            return [];
        }
    },

    async setActivePrinter(printerName, width) {
        if (this.config.mockMode || !this.config.vcrEnabled) return false;
        try {
            const res = await this._request('PUT', '/api/v1/printer', { printerName, width });
            return !!(res && res.success);
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось установить принтер:', e.message);
            return false;
        }
    },

    async getUnAcknowledgedReceipts() {
        if (this.config.mockMode || !this.config.vcrEnabled) return 0;
        try {
            const res = await this._request('GET', '/api/v1/fiscal-module/receipts/un-acknowledged');
            if (res?.success && typeof res.data === 'number') return res.data;
            return 0;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось получить непроведённые чеки:', e.message);
            return 0;
        }
    },

    async syncFiscalModule() {
        if (this.config.mockMode || !this.config.vcrEnabled) return false;
        try {
            const res = await this._request('GET', '/api/v1/fiscal-module/sync');
            return !!(res && res.success);
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Ошибка синхронизации с OFD:', e.message);
            return false;
        }
    },

    async getZReportCount() {
        if (this.config.mockMode || !this.config.vcrEnabled) return 0;
        try {
            const res = await this._request('GET', '/api/v1/fiscal-module/z-reports/count');
            if (res?.success && res.data != null) return Number(res.data);
            return 0;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось получить количество Z-отчётов:', e.message);
            return 0;
        }
    },

    async updateReceiptProduct(id, receiptId, productId, amount, salePrice, totalPrice, discountSum) {
        if (this.config.mockMode || !this.config.vcrEnabled) return false;
        try {
            const res = await this._request('PUT', '/api/v1/receipt-product', {
                id, receiptId, productId, amount, salePrice, totalPrice,
                discountSum: discountSum || 0
            });
            return !!(res && res.success);
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось обновить позицию чека:', e.message);
            return false;
        }
    },

    async deleteAllReceiptProducts(receiptId) {
        if (this.config.mockMode || !this.config.vcrEnabled) return false;
        try {
            const res = await this._request('DELETE', `/api/v1/receipt-product/by-receipt-id/${receiptId}`);
            return !!(res && res.success);
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось очистить товары чека:', e.message);
            return false;
        }
    },

    async getPaymentInfo(receiptId) {
        if (this.config.mockMode || !this.config.vcrEnabled) return null;
        try {
            const res = await this._request('GET', `/api/v1/payment/info?receiptId=${receiptId}`);
            if (res?.success && res.data) return res.data;
            return null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось получить информацию об оплате:', e.message);
            return null;
        }
    },

    async getReceiptHistory(params = {}) {
        if (this.config.mockMode || !this.config.vcrEnabled) return { data: [], totalCount: 0 };
        try {
            const qs = new URLSearchParams();
            if (params.operationTypeId != null) qs.set('operationTypeId', params.operationTypeId);
            if (params.receiptTypeId != null) qs.set('receiptTypeId', params.receiptTypeId);
            if (params.fromDate) qs.set('fromDate', params.fromDate);
            if (params.toDate) qs.set('toDate', params.toDate);
            if (params.page != null) qs.set('page', params.page);
            if (params.size != null) qs.set('size', params.size);
            const res = await this._request('GET', `/api/v1/receipt/history?${qs.toString()}`);
            if (res?.success) return { data: res.data || [], totalCount: res.totalCount || 0 };
            return { data: [], totalCount: 0 };
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось получить историю чеков:', e.message);
            return { data: [], totalCount: 0 };
        }
    },

    async getReceiptHistoryDownload(params = {}) {
        if (this.config.mockMode || !this.config.vcrEnabled) return null;
        try {
            const qs = new URLSearchParams();
            if (params.operationTypeId != null) qs.set('operationTypeId', params.operationTypeId);
            if (params.receiptTypeId != null) qs.set('receiptTypeId', params.receiptTypeId);
            if (params.fromDate) qs.set('fromDate', params.fromDate);
            if (params.toDate) qs.set('toDate', params.toDate);
            if (params.page != null) qs.set('page', params.page);
            if (params.size != null) qs.set('size', params.size);
            const url = `${this.config.vcrUrl}/api/v1/receipt/history/download?${qs.toString()}`;
            const resp = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${this.config.token}`,
                    'Accept-Language': 'ru'
                }
            });
            if (!resp.ok) return null;
            const blob = await resp.blob();
            const fileName = params.fileName || `receipt-history-${new Date().toISOString().slice(0, 10)}.xlsx`;
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(a.href);
            return true;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось скачать историю чеков:', e.message);
            return null;
        }
    },

    async getReceiptHistoryDetail(id) {
        if (this.config.mockMode || !this.config.vcrEnabled) return null;
        try {
            const res = await this._request('GET', `/api/v1/receipt/history/${id}`);
            if (res?.success && res.data) return res.data;
            return null;
        } catch (e) {
            console.warn('[ФискалAPI] ⚠️ Не удалось получить детали чека:', e.message);
            return null;
        }
    },

    async printReceipt(receiptId) {
        if (this.config.mockMode || !this.config.vcrEnabled) {
            console.log('[ФискалAPI] 🧪 Эмуляция отправки на принтер ВКК:', receiptId);
            return true;
        }

        try {
            console.log('[ФискалAPI] 🖨️ Запрос печати в ВКК:', receiptId);
            const res = await this._request('GET', `/api/v1/printer/print/${receiptId}`);
            if (res && res.success) {
                console.log('[ФискалAPI] ✅ Чек успешно распечатан ВКК.');
                return true;
            }
            console.error('[ФискалAPI] ❌ Ошибка печати в ВКК:', this._errorMessage(res?.error?.code, res?.error?.errorMessage || 'Неизвестно'));
            return false;
        } catch (e) {
            console.error('[ФискалAPI] ❌ Не удалось связаться с принтером ВКК:', e.message);
            return false;
        }
    },

    async init(options) {
        console.log('═══════════════════════════════════════════════════');
        console.log('  🏦 FiscalAPI — Модуль интеграции с Soliq ВКК');
        console.log('  📋 Протокол: HTTP REST JSON | ВКК v1.0');
        console.log('  🌐 ОФД: ofd.soliq.uz | ГНК РУз');
        console.log('═══════════════════════════════════════════════════');

        if (options) {
            if (options.vcrUrl != null)        this.config.vcrUrl = options.vcrUrl;
            if (options.vcrUsername != null)   this.config.vcrUsername = options.vcrUsername;
            if (options.vcrPassword != null)   this.config.vcrPassword = options.vcrPassword;
            if (options.vcrTerminalId != null) this.config.vcrTerminalId = options.vcrTerminalId;
            if (options.vcrEnabled != null)    this.config.vcrEnabled = options.vcrEnabled;
            if (options.timeout != null)       this.config.timeout = options.timeout;
            if (options.mockMode != null)      this.config.mockMode = options.mockMode;
        }

        const status = await this.checkStatus();
        return status.connected;
    }
};
