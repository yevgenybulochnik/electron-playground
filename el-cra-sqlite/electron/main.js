const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  win.loadURL('http://localhost:3000')
}

ipcMain.on('test-channel', (event, args) => {
  console.log(args)
})

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})
