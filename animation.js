const container = document.querySelector("section.bganimation");

const params = {
  width: `${container.getBoundingClientRect().width}`,
  height: `${container.getBoundingClientRect().height}`
};

const two = new Two(params);
two.appendTo(container);

// config for our animation
const numberOfShapes = 70;
const shapes = [];

const lineWeight = params.height / (numberOfShapes * 2);
const startWidth = params.width;
const loopDuration = 5 * 60;
const aDelay = 0.001;

const startRotation = 0;
const endRotation = fullRotation * (180 / 360);

// make shapes
for (let i = 0; i < numberOfShapes; i++) {
  const x = params.width * 0.5;
  const y = i * (lineWeight * 2) + lineWeight;

  const shape = two.makeRectangle(x, y, startWidth, lineWeight);
  shape.noStroke();
  shape.fill = "rgba(255, 255, 255, 0.25)";
  shapes.push(shape);
}

two.bind("update", function(frameCount) {
  // main timeline
  const currentFrame = frameCount % loopDuration
  const t = currentFrame / loopDuration
 
  //declares variables
  let r = startRotation;
  let w = startWidth;

  // 2 timelines
  shapes.forEach((shape, i) => {
    let aStart = aDelay * i;
    let aEnd = aDelay * (numberOfShapes - i);
    
    //reset rotation
    if (t === 0) {
      r = startRotation
      shape.rotation = r
    }

    //split timeline
    if (t < 0.5) {
      //timeline1
      u = mapAndClamp(t, 0, 0.5, 0, 1);
      console.log("timeline 1  = ", u)      
      w = mapAndClamp
    } else {
      //timeline2
      u = mapAndClamp(t, 0.5, 1, 0, 1);
      console.log("timeline 2  = ", u)  
    }

    r = mapAndClamp(t, 0, 1, startRotation, endRotation);

    shape.rotation = r;
    shape.width = w;
  });
});

// two.play();
