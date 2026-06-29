const DB_NAME = 'pos_database';
const DB_VERSION = 3;

const DB = {
    db: null,

    init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = (event) => {
                console.error('Database error:', event.target.error);
                reject(event.target.error);
            };

            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve();
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                if (!db.objectStoreNames.contains('orders')) {
                    db.createObjectStore('orders', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('menu')) {
                    db.createObjectStore('menu', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('categories')) {
                    db.createObjectStore('categories', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('tables')) {
                    db.createObjectStore('tables', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('ingredients')) {
                    db.createObjectStore('ingredients', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('tech_cards')) {
                    db.createObjectStore('tech_cards', { keyPath: 'menuItemId' });
                }
                if (!db.objectStoreNames.contains('guests')) {
                    db.createObjectStore('guests', { keyPath: 'phone' });
                }
                if (!db.objectStoreNames.contains('audit_log')) {
                    const auditStore = db.createObjectStore('audit_log', { keyPath: 'id', autoIncrement: true });
                    auditStore.createIndex('timestamp', 'timestamp', { unique: false });
                }
                if (!db.objectStoreNames.contains('z_reports')) {
                    db.createObjectStore('z_reports', { keyPath: 'id', autoIncrement: true });
                }
                if (!db.objectStoreNames.contains('suppliers')) {
                    db.createObjectStore('suppliers', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('stock_movements')) {
                    db.createObjectStore('stock_movements', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('returns')) {
                    db.createObjectStore('returns', { keyPath: 'id' });
                }
            };
        });
    },

    async get(storeName, key) {
        return new Promise((resolve, reject) => {
            if (!this.db) { resolve(null); return; }
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.get(key);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    async getAll(storeName) {
        
        try {
            let endpoint = `/api/${storeName}`;
            if (storeName === 'ingredients') endpoint = '/api/warehouse';
            const res = await fetch(endpoint);
            if (res.ok) {
                const data = await res.json();
                const key = Object.keys(data).find(k => k !== 'ok');
                if (key && Array.isArray(data[key])) {
                    
                    data[key].forEach(item => this.put(storeName, item, true));
                    return data[key];
                }
            }
        } catch (e) {
            console.warn(`Backend fetch failed for ${storeName}, falling back to IndexedDB`);
        }

        return new Promise((resolve, reject) => {
            if (!this.db) { resolve([]); return; }
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    async put(storeName, item, skipBackend = false) {
        
        if (!skipBackend) {
            try {
                let endpoint = `/api/${storeName}`;
                if (storeName === 'ingredients') endpoint = '/api/warehouse';
                await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(item)
                });
            } catch (e) {
                console.warn(`Failed to sync ${storeName} to backend, saving locally`);
            }
        }

        return new Promise((resolve, reject) => {
            if (!this.db) { resolve(); return; }
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.put(item);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    async delete(storeName, key) {
        
        try {
            let endpoint = `/api/${storeName}/${encodeURIComponent(key)}`;
            if (storeName === 'ingredients') endpoint = `/api/warehouse/${encodeURIComponent(key)}`;
            await fetch(endpoint, {
                method: 'DELETE'
            });
        } catch (e) {
            console.warn(`Failed to sync delete ${storeName} to backend`);
        }

        return new Promise((resolve, reject) => {
            if (!this.db) { resolve(); return; }
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.delete(key);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    },

    async logAction(action, details, staffName) {
        const logEntry = {
            action,
            details,
            staffName: staffName || 'System',
            timestamp: new Date().toISOString()
        };
        return this.put('audit_log', logEntry, true); 
    }
};

window.DB = DB;
