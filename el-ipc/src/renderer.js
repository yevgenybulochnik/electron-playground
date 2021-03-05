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

