const stickerSpace = document.querySelector('div.stickerSpace')
let slide = 0
let z = 1
let stickers = []
let moveable = ""

const labels = [
  {copy: "Hi. I'm Sam"},
  {copy: 'I am currently based in Liverpool'},
  {copy: '(a very cool city)'},
  {copy: 'I am a technical/ creative artworker'},
  {copy: 'I love all things digital design'}
]

const stick = function (x, y) {
  console.log('stick run')

  z = z + 1
  const rotation = Math.floor(Math.random() * 30) - 15
  console.log('x = ', x, ' y = ', y, 'rotation = ', rotation)

  //Creates a new p element and inserts text
  var sticker = document.createElement('div')
  sticker.innerHTML = labels[slide].copy
  sticker.classList.add('label')
  sticker.style.left = `${x}px`
  sticker.style.top = `${y}px`
  sticker.style.transform = `rotate(${rotation}deg) translate(-50%, -50%)`
  sticker.style.zIndex = z
  //appends text to stickerspace
  document.getElementById('stickerSpace').appendChild(sticker)
  slide = slide + 1
  stickers.push(sticker)
}

const drag = function () {
  
}

stickerSpace.addEventListener('click', function(e) {
  console.log(e)
  let target = e.target
  if (e.target === stickerSpace) {
  stick(e.clientX, e.clientY)
  }
  for (let i = 0; i < stickers.length; i++){
    if (e.target === stickers[i]) {
      moveable = e.target
    }
  }
})

document.addEventListener("mouseup", function () {
  moveable = ""
})

stickerSpace.addEventListener("mousemove", function (e) {
  if (moveable === true) {
  moveable.style.top = e.clientX
  moveable.style.left = e.clientY
  }
})

