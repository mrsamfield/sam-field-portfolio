const container = document.querySelector('section.bganimation')

const params = {
  width: `${container.getBoundingClientRect().width}`,
  height: `${container.getBoundingClientRect().height}`
}

const two = new Two(params)
two.appendTo(container)

// config for our animation
const numberOfShapes = 30
const shapes = []

const lineWeight = params.height / (numberOfShapes * 2)
const startWidth = params.width
const loopDuration = 5 * 60
const aDelay = 0.001

const startRotation = 0
const endRotation = fullRotation * 180 / 360  


// make shapes
for (let i = 0; i < numberOfShapes; i++) {
  const x = params.width * 0.5
  const y = i * (lineWeight * 2) + lineWeight

  const shape = two.makeRectangle(x, y, startWidth, lineWeight)
  shape.noStroke()
  shape.fill = 'rgba(255, 255, 255, 0.25)'
  shapes.push(shape)
}

two.bind('update', function(frameCount) {
  // main timeline
  const currentFrame = frameCount % loopDuration
  const t = currentFrame / loopDuration
  

  // 2 timelines
  shapes.forEach((shape, i) => {
    let aStart = aDelay * i
    let aEnd = aDelay * (numberOfShapes - i)
    let r = startRotation
    let w = startWidth
 
      const u = mapAndClamp(t, 0 + aStart, 1 - aEnd, 0, 1)
      const cu = easeInOutCubic(u)
      w = mapAndClamp(cu, 0, 0.5, startWidth, lineWeight)
      w = mapAndClamp(cu, 0.5, 1, lineWeight, startWidth)
      r = mapAndClamp(cu, 0, 1, endRotation, startRotation)
    
    
    shape.rotation = r
    shape.width = w
  })
})

two.play()