const elipsesBox = document.querySelector("div.animated-elipses")

const params = { 
  width: elipsesBox.getBoundingClientRect().width, 
  height: elipsesBox.getBoundingClientRect().height 
}

const two = new Two(params)
two.appendTo(elipsesBox)

// config for our animation
const numberOfShapes = 3
const loopDuration = 2 * 60
const dots = []
const dotSize = 2
const minHeight = params.height - dotSize
const maxHeight = params.height * 0.7
const delay = 0.05


const startPosition = function (n) {
  return n * (dotSize * 4) + 5
} 

// make shapes
for (let i = 0; i < numberOfShapes; i++) { 
  const dot = two.makeCircle(startPosition(i), params.height - dotSize, dotSize);
  dot.fill = "#000000"
  dot.noStroke()
  dots.push(dot)
}

two.bind("update", function (frameCount) {
  const currentFrame = frameCount % loopDuration
  const t = currentFrame / loopDuration
  dots.forEach((dot, i) => {
    const startDelay = delay * i
    const endDelay = delay * (numberOfShapes - i) - 0.01

  let h = 0  
  
  if (t <= 0.5) {
    const u = mapAndClamp(t, 0 + startDelay, 0.5 - endDelay, 0, 1)
    const ue = easeInOutCubic(u)
    h = mapAndClamp(ue, 0, 1, minHeight, maxHeight)
  } else {
    const u = mapAndClamp(t, 0.5 + startDelay, 1 - endDelay, 1, 0)
    const ue = easeInOutCubic(u)
    h = mapAndClamp(ue, 1, 0, maxHeight, minHeight)
  }
  
  dot.translation.set(startPosition(i), h)

})


})

two.play()