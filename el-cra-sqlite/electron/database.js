const path = require('path')
const fs = require('fs')
const { app } = require('electron')
const isDev = require('electron-is-dev')
const sqlite3 = require('sqlite3')


let dbFile;

if (isDev) {
  dbFile = 'db.sqlite3'
} else {
  dbFile = path.join(app.getPath('userData'), 'db.sqlite3')
}

let db;

if (!fs.existsSync(dbFile)) {
  db = new sqlite3.Database(dbFile)

  const initSql = fs.readFileSync(path.join(__dirname, 'init.sql')).toString()

  const sqlArray = initSql.split(';')

  // Remove last element due to split on ;
  sqlArray.pop()

  db.serialize(() => {
    // db.run('PRAGMA foreign_keys=;');
    db.run('BEGIN TRANSACTION;');

    sqlArray.forEach((statement) => {
      if (statement) {
        statement += ';'
        db.run(statement, (err) => {
          if (err) console.log(err)
        })
      }
    })

    db.run('COMMIT;')
  })
} else {
  db = new sqlite3.Database(dbFile)
}


module.exports = db
