
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: "hidden",
        titleBarOverlay: {
            color: '#2f3241',
            symbolColor: '#74b1be',
            height: 30
        },
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    
    win.loadFile('index.html')
}

function quit() {
    app.quit();
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong');
    ipcMain.handle('quit', () => quit());
    ipcMain.handle('parse', (e, filepath) => parsePath(filepath));
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

async function parsePath(filepath) {
    console.log("parsing: " + filepath + "..." );
    return path.parse(filepath).base;
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})