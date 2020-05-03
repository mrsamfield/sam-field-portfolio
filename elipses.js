const elipsesBox = document.querySelector("div.animated-elipses")

const elipsesParams = { 
  width: elipsesBox.getBoundingClientRect().width, 
  height: elipsesBox.getBoundingClientRect().height 
}

const elipsesTwo = new Two(elipsesParams)
elipsesTwo.appendTo(elipsesBox)

// config for our animation
const numberOfElipses = 3
const elipsesLoopDuration = 2 * 60
const dots = []
const dotSize = 1.5
const elipsesMinHeight = elipsesParams.height - dotSize
const elipsesMaxHeight = elipsesParams.height * 0.7
const delay = 0.05


const elipsesStartPosition = function (n) {
  return n * (dotSize * 4) + 5
} 

// make shapes
for (let i = 0; i < numberOfShapes; i++) { 
  const dot = elipsesTwo.makeCircle(elipsesStartPosition(i), elipsesParams.height - dotSize, dotSize);
  dot.fill = "#000000"
  dot.noStroke()
  dots.push(dot)
}

elipsesTwo.bind("update", function (frameCount) {
  const currentFrame = frameCount % loopDuration
  const t = currentFrame / loopDuration
  dots.forEach((dot, i) => {
    const startDelay = delay * i
    const endDelay = delay * (numberOfShapes - i) - 0.01

  let h = 0  
  
  if (t <= 0.5) {
    const u = mapAndClamp(t, 0 + startDelay, 0.5 - endDelay, 0, 1)
    const ue = easeInOutCubic(u)
    h = mapAndClamp(ue, 0, 1, elipsesMinHeight, elipsesMaxHeight)
  } else {
    const u = mapAndClamp(t, 0.5 + startDelay, 1 - endDelay, 1, 0)
    const ue = easeInOutCubic(u)
    h = mapAndClamp(ue, 1, 0, elipsesMaxHeight, elipsesMinHeight)
  }
  
  dot.translation.set(startPosition(i), h)

})


})

elipsesTwo.play()