//stickers
const stickerSpace = document.querySelector("div.stickerSpace");
let slide = 0;
let z = 1;
let stickers = [];

//for drag
let dragItem = ""
let active = false;
let currentX = ""
let currentY = ""
let initialX = ""
let initialY = ""
let xOffset = 0;
let yOffset = 0;


const labels = [
  { copy: "Hi. I'm Sam" },
  { copy: "I am currently based in Liverpool" },
  { copy: "(a very cool city)" },
  { copy: "I am a technical/ creative artworker" },
  { copy: "I love all things digital design" }
];

const stick = function(x, y) {
  z = z + 1;
  const rotation = Math.floor(Math.random() * 30) - 15;
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

const drfunction dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
    active = true;
  }
}

stickerSpace.addEventListener("click", function (e) {
  stick(e.clientX, e.clientY)
})

stickerSpace.addEventListener("mousedown", dragStart, false);
stickerSpace.addEventListener("mouseup", dragEnd, false);
stickerSpace.addEventListener("mousemove", drag, false);


