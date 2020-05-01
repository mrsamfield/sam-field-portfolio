//stickers
const stickerSpace = document.querySelector("div.stickerSpace");
let slide = 0;
let z = 1;
let stickers = [];

//for drag
let activeItem = "";
let active = false;
let currentX = "";
let currentY = "";
let initialX = "";
let initialY = "";
let xOffset = 0;
let yOffset = 0;
let rotation = "";
let midPointX = "";
let midPointY = "";

const labels = [
  { copy: "Hi. I'm Sam" },
  { copy: "I am currently based in Liverpool" },
  { copy: "(a very cool city)" },
  { copy: "I am a technical/ creative artworker" },
  { copy: "I love all things digital design" }
];

const stick = function(x, y) {
  z = z + 1;
  const rotation = Math.floor(Math.random() * 10) - 5;
  //Creates a new p element and inserts text
  let sticker = document.createElement("div");
  sticker.innerHTML = labels[slide].copy;
  sticker.classList.add("label");
  sticker.style.left = `${x}px`;
  sticker.style.top = `${y}px`;
  sticker.style.transform = `rotate(${rotation}deg) translate(-50%, -50%)`;
  sticker.style.zIndex = z;
  //appends text to stickerspace
  document.getElementById("stickerSpace").appendChild(sticker);
  slide = slide + 1;
  stickers.push(sticker);
};

//Starts the drag
const dragStart = function(e) {
  if (e.target !== e.currentTarget) {
    active = true;

    // this is the item we are interacting with
    activeItem = e.target;
    let xOff = activeItem.getBoundingClientRect().width / 2;
    let yOff = activeItem.getBoundingClientRect().height / 2;

    if (activeItem !== null) {
      if (!activeItem.xOffset) {
        activeItem.xOffset = -1 * xOff;
      }

      if (!activeItem.yOffset) {
        activeItem.yOffset = -1 * yOff;
      }

      if (e.type === "touchstart") {
        activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
        activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
      } else {
        console.log("doing something!");
        activeItem.initialX = e.clientX - activeItem.xOffset;
        activeItem.initialY = e.clientY - activeItem.yOffset;
      }
    }
  }
};

const drag = function(e) {
  if (active) {
    if (e.type === "touchmove") {
      e.preventDefault();

      activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
      activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
    } else {
      activeItem.currentX = e.clientX - activeItem.initialX;
      activeItem.currentY = e.clientY - activeItem.initialY;
    }

    activeItem.xOffset = activeItem.currentX;
    activeItem.yOffset = activeItem.currentY;

    setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
  }
};

const setTranslate = function(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) rotate(${rotation}deg)`;
};

const dragEnd = function(e) {
  if (activeItem !== null) {
    activeItem.initialX = activeItem.currentX;
    activeItem.initialY = activeItem.currentY;
  }
  active = false;
  activeItem = null;
};

stickerSpace.addEventListener("touchstart", function(e) {
  dragStart(e);
});

stickerSpace.addEventListener("touchend", function(e) {
  dragEnd(e);
});

stickerSpace.addEventListener("touchmove", function(e) {
  drag(e);
});

stickerSpace.addEventListener("mousedown", function(e) {
  rotation = Math.floor(Math.random() * 10) - 5;
  if (e.target === stickerSpace) {
    stick(e.clientX, e.clientY);
    activeItem = "";
  }
  for (let i = 0; i <= stickers.length; i++) {
    if (e.target === stickers[i]) {
      activeItem = stickers[i];
    }
  }
  dragStart(e);
});

stickerSpace.addEventListener("mouseup", function(e) {
  dragEnd(e);
});

// stickerSpace.addEventListener("mousemove", drag, false);
stickerSpace.addEventListener("mousemove", function(e) {
  drag(e);
});
