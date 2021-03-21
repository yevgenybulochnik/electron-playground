const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    frame: false,
  })
  return win
}

app.whenReady().then(() => {
  const win = createWindow()
  win.loadURL('http://localhost:3000')

  ipcMain.on('close-app', () => {
    win.close()
  })
})

app.on('window-all-closed', () => {
  app.quit()
})
