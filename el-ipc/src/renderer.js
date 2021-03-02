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
