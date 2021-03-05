const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
    },
    // titleBarStyle: 'hidden', // makes titlebar hidden on OSX
    frame: false // removes native menu
  })

  return win
}

app.whenReady().then(() => {
  const win = createWindow()
  win.loadFile('src/index.html')

  ipcMain.on('close-app', () => {
    win.close()
  })
})

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('ping', (event) => {
  console.log('Main Processes has been pinged!')
  setTimeout(() => {
    event.sender.send('ping-reply', 'pong')
  }, 3000)
})
