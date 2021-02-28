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
