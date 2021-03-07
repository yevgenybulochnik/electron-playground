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

$('#dir-display-btn').on('click', async () => {
  const results = await ipcRenderer.invoke('file-explore')

  $('#file-list').empty()

  const group = $('<ul class="list-group"></ul>')

  $('#file-list').append(group)


  results.map(result => {
    group.append(`<li class="list-group-item">${result}</div>`)
  })
})

