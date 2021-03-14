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

  // wrapping this function is necessary because you have to wait until the index.html file loads. This is an example of sending a message on load without a trigger from the renderer process
  // win.webContents.on('did-finish-load', () => {
  //   const query = `
  //     SELECT
  //       users.username,
  //       users.email,
  //       groups.name AS "group"
  //     FROM users JOIN groups
  //     WHERE
  //       users.group_id = groups.id;
  //   `
  //   db.all(query, [], (err, rows) => {
  //     if (err) console.log(err)
  //     win.webContents.send('get-user-list', rows)
  //   })
  // })

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

ipcMain.on('get-user-list', (event) => {
  const query = `
    SELECT
      users.username,
      users.email,
      groups.name AS "group"
    FROM users JOIN groups
    WHERE
      users.group_id = groups.id;
  `
  db.all(query, [], (err, rows) => {
    if (err) console.log(err)
    event.sender.send('get-user-list', rows)
  })
})

ipcMain.handle('add-user', (event, args) => {

  const sql = `
    INSERT INTO users(username, email, group_id)
    VALUES
      (?,?,1)
  `
  db.run(sql, [args['username'], args['email']], (err) => {
    if (err) {
      console.log(err)
    }
  })
})

ipcMain.handle('file-explore', () => {
  // Purposely using the sync handler to block the application and prevent the renderer process from executing
  const dirPath = dialog.showOpenDialogSync({properties: ["openDirectory"]})[0]
  let files = []

  fs.readdirSync(dirPath).forEach(file => files.push(file))

  return files
})
