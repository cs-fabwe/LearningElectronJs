const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping'),
    quit: () => ipcRenderer.invoke('quit'),
    parse: (filepath) => ipcRenderer.invoke('parse', filepath)
    // we can also expose variables, not just functions
})