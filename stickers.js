const stickerSpace = document.querySelector("div.stickerSpace");
let slide = 0;
let z = 1;
let stickers = [];
let moveable = "";

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
  var sticker = document.createElement("div");
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

const drag = function(x, y) {
  if (moveable !== "") {
    moveable.style.top = x;
    moveable.style.left = y;
  }
};

stickerSpace.addEventListener("mousedown", function(e) {
  let target = e.target;
  if (target === stickerSpace) {
    stick(e.clientX, e.clientY);
    moveable = ""
  }
  for (let i = 0; i < stickers.length; i++) {
    if (target === stickers[i]) {
      moveable = target;
    }
  }
});

document.addEventListener("mouseup", function() {
  moveable = "";
});

stickerSpace.addEventListener("mousemove", function(e) {
  drag(e.clientX, e.clientY)
});
