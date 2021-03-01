// Playing around with vanillajs
container = document.getElementById('container')

blueBlock = document.createElement('div')

blueBlock.style.width = '200px'
blueBlock.style.height = '200px'
blueBlock.style.background = 'blue'

redBlock = document.createElement('div')

redBlock.style.width = '100px'
redBlock.style.height = '100px'
redBlock.style.background = 'red'


container.append(blueBlock)
container.append(redBlock)

// Playing around with jquery
const $ = require('jquery')

$('#container').css('border', '3px solid red')

let count = 0

let counterButton = $('<button>Click</button>')
counterButton.on('click', () => {
  count += 1
  $('.count-container').remove()
  $('body').append(`<div class='count-container'>${count}</div>`)
})

$('body').append(counterButton)

// Open a dialog menu
// There is discussion on removing the remote module from electron with suggestions to use IPC processes instead
//
// const { remote } = require('electron')

// const dialog = remote.dialog

// let dialogButton = $('<button>Dialog</button>')
// dialogButton.on('click', () => {
//   dialog.showOpenDialog()
// })

// $('body').append(dialogButton)

