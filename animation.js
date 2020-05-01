const container = document.querySelector("section.bganimation");

const params = {
  width: `${container.getBoundingClientRect().width}`,
  height: `${container.getBoundingClientRect().height}`
};

const two = new Two(params);
two.appendTo(container);

// config for our animation
const numberOfShapes = 100
const shapes = [];

const lineWeight = params.height / (numberOfShapes * 2);
const startWidth = params.width;
const loopDuration = 10 * 60;
const aDelay = 0.05;

const startRotation = 0;
const endRotation = fullRotation * (180 / 360);

// make shapes
for (let i = 0; i < numberOfShapes; i++) {
  const x = params.width * 0.5;
  const y = i * (lineWeight * 2) + lineWeight;

  const shape = two.makeRectangle(x, y, startWidth, lineWeight);
  shape.noStroke();
  shape.fill = "rgba(255, 255, 255, 0.3)"
  shapes.push(shape);
}

two.bind("update", function(frameCount) {
  // main timeline
  const currentFrame = frameCount % loopDuration;
  const t = currentFrame / loopDuration;

  //declares variables
  let r = startRotation;
  let w = startWidth;

  // 2 timelines
  shapes.forEach((shape, i) => {
    //delays
    const aStart = 0.001 * (numberOfShapes - i)
    const aEnd = 0.001 * i
    
    //reset rotation
    if (t === 0) {
      r = startRotation;
      shape.rotation = r;
    }
    
    //reset timeline
    let u = 0;

    //split timeline
    if (t < 0.5) {
      u = mapAndClamp(t, 0 + aStart, 0.5 - aEnd, 1, 0);
    } else {
      u = mapAndClamp(t, 0.5 + aStart, 1 - aEnd, 0, 1);   
    }

    w = -1 * (lineWeight + (startWidth - lineWeight) * easeInOutCubic(u));
    
    if(i % 2) {
      u = easeInOutCubic(t)
      r = mapAndClamp(u, 0, 1, startRotation, endRotation);
    } else {
      r = mapAndClamp(t, 0, 1, endRotation, startRotation);
    }

    shape.rotation = r;
    shape.width = w;
  });
});

two.play();
