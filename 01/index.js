var s = document.querySelectorAll('.square-border')
var defaultState = -10

var resetRotation = function () {
  s.forEach( function (e, i) {
    e.style.transform = 'rotate(' + (defaultState + (i * 90)) +'deg)'
  })
}

var colors = ["#b9d6f2","#061a40","#0353a4","#006daa","#003559"]
var colorIndex = 1 

var colorChange = function () {
  var sides = document.querySelectorAll('.side')
  sides.forEach( function (side) {
    side.style.background = colors[colorIndex]
  })
  colorIndex = (colorIndex + 1) % colors.length
}

resetRotation ()

var animation = function () {
  var tl = new TimelineMax({onComplete: function () {
    resetRotation()
    animation()
    colorChange()
  }})
  var angle = {val: 0}
  tl.staggerFromTo('.side', 0.5, {width: 0}, {width: '100%', ease: Power3.easeOut}, 0.4) 
  tl.to(angle, 0.5, {val: 10, ease:Elastic.easeOut.config(1, 0.5), onUpdate: function () {
    s.forEach( function (e, i) {
      e.style.transform = 'rotate(' + (defaultState + (i * 90) + angle.val) +'deg)'
    })
  }})
  tl.fromTo('.side', 0.5,{y:'-25px'}, {y:'-50px',ease:Elastic.easeIn.config(1, 0.75),  delay: -0.1})
}

setTimeout(animation, 1 * 1000)
