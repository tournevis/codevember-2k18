var canvas = document.querySelector('#c')
var ctx = canvas.getContext('2d')
var w = 400
var h = 400
var offset = [200, 200]
var scale = 1.5
var delta = 1
var flowerInput = '🥕'
var draw = function () {
	ctx.clearRect(0,0,400,400)
  	ctx.font = 120 + 'px Helvetica'
  	ctx.save()

  	ctx.translate(offset[0], offset[1])

  	ctx.rotate((delta * Math.PI) / 180)
  	for (var i = 0; i < 360; i += 20) {
  		ctx.save()
  		ctx.rotate(  i * Math.PI / 180)
  		ctx.fillText(flowerInput, 0,0)  
  		ctx.restore()
  	}
  	ctx.restore()
  	delta ++
	window.requestAnimationFrame(draw);
}
draw()


document.querySelector('#input-text').addEventListener('input', function (evt) {
    flowerInput = this.value ? this.value : '🥕'
});