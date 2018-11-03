var c = document.querySelector('.content')
var h = document.querySelector('.hourglass')
var step = 0
var contentStep = 0
var period = 3
setInterval(function() {
	step += 180
	h.style.transform = 'translate(-50%, -50%) rotate(' + step + 'deg)'
}, period * 1000)

setInterval(function() {
	contentStep += 180
	c.style.transform = 'rotate(' + contentStep + 'deg)'
}, period * 2 * 1000)