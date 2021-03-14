const $ = require('jquery')
const { ipcRenderer } = require('electron')


$('#close-app').on('click', () => {
  ipcRenderer.send('close-app')
})

$('#ping').on('click', () => {
  $('#pong').text('Waiting for pong...')
  ipcRenderer.send('ping')
})

ipcRenderer.on('ping-reply', () => {
  $('#pong').text('Pong!')
})

// Very poorly written jquery to test out getting data from the sqlite db
const userListContainer = $('#user-list')
const usersGroup = $('<ul class="list-group"><ul/>')

userListContainer.append(usersGroup)

ipcRenderer.on('get-user-list', (event, users) => {
  users.forEach(user => {
    usersGroup.append(
      $(`<li class="list-group-item">${user.group} ${user.username} ${user.email}</li>`)
    )
  })
})

// Create new user with form
$('#create-user-form').on('submit',(e) => {
  e.preventDefault()
  const username = $('#userName').val()
  const email = $('#email').val()
  ipcRenderer.invoke('add-user', {username, email}).then((err) => {
    if (err) console.log(err)
  })
})


$('#dir-display-btn').on('click', async () => {
  const results = await ipcRenderer.invoke('file-explore')

  $('#file-list').empty()

  const group = $('<ul class="list-group"></ul>')

  $('#file-list').append(group)


  results.map(result => {
    group.append(`<li class="list-group-item">${result}</div>`)
  })
})

