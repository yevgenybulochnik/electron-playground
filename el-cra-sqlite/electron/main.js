const { app, BrowserWindow, ipcMain } = require('electron')

const db = require('./database')

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

ipcMain.handle('get-user-list', (event) => {
  const query = `
    SELECT
      users.username,
      users.email,
      groups.name AS "group"
    FROM users JOIN groups
    WHERE
      users.group_id = groups.id;
  `

  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(err)
      } else {
        const adjRows = rows.reduce((acc, row) => {
          if (!acc[row.group]) {
            acc[row.group] = []
          }
          acc[row.group].push({
            username: row.username,
            email: row.email
          })
          return acc
        }, {})
        resolve(adjRows)
      }
    })
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
