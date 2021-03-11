const {
  app,
  BrowserWindow,
  ipcMain,
  dialog
} = require('electron')

const fs = require('fs')
const db = require('./database')

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    // titleBarStyle: 'hidden', // makes titlebar hidden on OSX
    frame: false // removes native menu
  })

  return win
}

app.whenReady().then(() => {
  const win = createWindow()
  win.loadFile('src/index.html')

  // win.webContents.openDevTools()

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

ipcMain.handle('file-explore', () => {
  // Purposely using the sync handler to block the application and prevent the renderer process from executing
  const dirPath = dialog.showOpenDialogSync({properties: ["openDirectory"]})[0]
  let files = []

  fs.readdirSync(dirPath).forEach(file => files.push(file))

  return files
})
