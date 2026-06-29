

const FiscalQueue = {
    storageKey: 'pos_fiscal_queue',
    queue: [],
    isProcessing: false,
    retryBaseMs: 10000,
    retryMaxMs: 300000,
    maxAttempts: 10,
    pollIntervalMs: 15000,
    _timer: null,

    init() {
        this._load();
        this._schedule();
        this.process();
    },

    enqueue(receiptPayload, meta = {}) {
        const id = 'FQ-' + Date.now() + '-' + Math.random().toString(16).slice(2, 8);
        const now = Date.now();
        const item = {
            id,
            receipt: receiptPayload,
            meta,
            status: 'pending',
            attempts: 0,
            nextRetryAt: now,
            lastError: '',
            createdAt: now
        };
        this.queue.push(item);
        this._save();
        this._notify('⚠️ Чек поставлен в очередь фискализации', 'warning');
        this.process();
        return id;
    },

    async process() {
        if (this.isProcessing) return;
        if (!this.queue.length) return;
        if (!(await this._canProcess())) return;

        this.isProcessing = true;
        try {
            const now = Date.now();
            for (const item of this.queue) {
                if (item.status !== 'pending') continue;
                if (item.nextRetryAt > now) continue;

                try {
                    const res = await FiscalAPI.registerReceipt(item.receipt);
                    if (res && res.success) {
                        item.status = 'success';
                        item.result = res;
                        item.completedAt = Date.now();
                        this._notify('✅ Фискализация из очереди выполнена', 'success');
                    } else {
                        this._markFailed(item, res?.error || 'Фискализация не выполнена');
                    }
                } catch (err) {
                    this._markFailed(item, err?.message || 'Ошибка фискализации');
                }
            }
        } finally {
            this._purgeSuccess();
            this._save();
            this.isProcessing = false;
        }
    },

    _markFailed(item, errorMessage) {
        item.attempts += 1;
        item.lastError = String(errorMessage || 'Ошибка');
        if (item.attempts >= this.maxAttempts) {
            item.status = 'failed';
            this._notify('❌ Не удалось фискализировать чек (лимит попыток)', 'error');
            return;
        }

        const delay = Math.min(this.retryMaxMs, this.retryBaseMs * Math.pow(2, item.attempts - 1));
        item.nextRetryAt = Date.now() + delay;
    },

    _purgeSuccess() {
        this.queue = this.queue.filter(item => item.status !== 'success');
    },

    _schedule() {
        if (this._timer) clearInterval(this._timer);
        this._timer = setInterval(() => this.process(), this.pollIntervalMs);
    },

    async _canProcess() {
        if (typeof FiscalAPI === 'undefined') return false;
        if (!FiscalAPI.config || FiscalAPI.config.mockMode || !FiscalAPI.config.vcrEnabled) return false;
        if (window.POS && POS.state) return !!POS.state.fiscalConnected;
        try {
            const status = await FiscalAPI.checkStatus();
            return !!status.connected;
        } catch (_) {
            return false;
        }
    },

    _load() {
        try {
            const raw = localStorage.getItem(this.storageKey);
            const parsed = raw ? JSON.parse(raw) : [];
            this.queue = Array.isArray(parsed) ? parsed : [];
        } catch (_) {
            this.queue = [];
        }
    },

    _save() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.queue));
        } catch (_) {}
    },

    _notify(message, type) {
        if (window.POS && typeof POS.showToast === 'function') {
            POS.showToast(message, type);
        } else {
            console.log('[FiscalQueue]', message);
        }
    },

    getUnsentItems() {
        this._load();
        return this.queue.filter(item => item.status === 'pending' || item.status === 'failed');
    },

    getUnsentCount() {
        this._load();
        return this.queue.filter(item => item.status === 'pending' || item.status === 'failed').length;
    },

    removeItem(id) {
        this.queue = this.queue.filter(item => item.id !== id);
        this._save();
    },

    async retryItemById(id) {
        const item = this.queue.find(i => i.id === id);
        if (!item) return { success: false, error: 'Не найден' };
        if (!(await this._canProcess())) return { success: false, error: 'ФМ не подключён' };
        try {
            const res = await FiscalAPI.registerReceipt(item.receipt);
            if (res && res.success) {
                item.status = 'success';
                item.result = res;
                item.completedAt = Date.now();
                this._purgeSuccess();
                this._save();
                return { success: true, result: res };
            } else {
                this._markFailed(item, res?.error || 'Фискализация не выполнена');
                this._save();
                return { success: false, error: res?.error || 'Фискализация не выполнена' };
            }
        } catch (err) {
            this._markFailed(item, err?.message || 'Ошибка фискализации');
            this._save();
            return { success: false, error: err?.message || 'Ошибка фискализации' };
        }
    }
};

window.FiscalQueue = FiscalQueue;
