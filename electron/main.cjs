const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');
const { fork } = require('child_process');

const PORT = 3080;
let child = null;
let win = null;

function startServer() {
  return new Promise((resolve, reject) => {
    const serverPath = path.join(__dirname, '..', 'backend', 'server', 'index.js');
    const env = { ...process.env, PORT: String(PORT), ELECTRON_RUN_AS_NODE: '1' };

    child = fork(serverPath, [], { env, stdio: 'pipe', silent: true });
    let done = false;

    child.on('message', (m) => { if (m === 'ready' && !done) { done = true; resolve(); } });

    child.stdout.on('data', (d) => {
      const s = d.toString();
      process.stdout.write('[server] ' + s);
      if (!done && (s.includes('running on') || s.includes('POS Terminal'))) {
        done = true; resolve();
      }
    });

    child.stderr.on('data', (d) => process.stderr.write('[server] ' + d.toString()));
    child.on('error', (e) => { if (!done) reject(e); });
    child.on('exit', (c) => { if (!done) reject(new Error('exit:' + c)); });

    setTimeout(() => { if (!done) { done = true; resolve(); } }, 20000);
  });
}

const steps = [
  { m: 'Запуск сервера...', p: 15 },
  { m: 'Подключение к БД...', p: 30 },
  { m: 'Загрузка конфигурации...', p: 45 },
  { m: 'Подготовка интерфейса...', p: 60 },
  { m: 'Загрузка данных...', p: 75 },
  { m: 'Почти готово...', p: 88 },
];

function createWindow() {
  win = new BrowserWindow({
    width: 1280, height: 900,
    minWidth: 1024, minHeight: 700,
    title: 'POS Terminal - Virtual kassa',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs'),
    },
    autoHideMenuBar: true, show: false,
    backgroundColor: '#0b1120',
  });

  win.maximize();

  // Show splash screen immediately while server starts
  win.loadFile(path.join(__dirname, 'splash.html'));

  win.webContents.on('did-finish-load', () => {
    // After main app page loads, update preload overlay
    let i = 0;
    const iv = setInterval(() => {
      if (i < steps.length) {
        win.webContents.executeJavaScript(
          'window.__posOverlay?.update("' + steps[i].m + '", ' + steps[i].p + ', false)'
        ).catch(() => {});
        i++;
      }
    }, 1000);

    const checkReady = () => {
      win.webContents.executeJavaScript(`
        (function() {
          if (typeof POS !== 'undefined' && POS && POS.state) {
            window.__posOverlay?.update('Готово!', 100, true);
            return true;
          }
          return false;
        })()
      `).then((r) => { if (!r) setTimeout(checkReady, 200); })
       .catch(() => setTimeout(checkReady, 200));
    };

    setTimeout(checkReady, 1500);
  });

  win.once('ready-to-show', () => win.show());
  win.on('closed', () => { win = null; });
  win.on('page-title-updated', (e) => e.preventDefault());
}

app.whenReady().then(async () => {
  console.log('[electron] Creating window...');
  createWindow();

  try {
    console.log('[electron] Starting server...');
    await startServer();
    console.log('[electron] Server ready, loading main app...');
    win.loadURL(`http://localhost:${PORT}`);
  } catch (err) {
    console.error('[electron] Error:', err);
    dialog.showErrorBox('POS Terminal', 'Ошибка запуска:\n' + err.message);
    app.quit();
  }
});

app.on('window-all-closed', () => {
  if (child) { child.kill(); child = null; }
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', () => {
  if (child) { child.kill(); child = null; }
});
