const stickerSpace = document.querySelector('div.stickerSpace')
let slide = 0
let z = 1
let st

const labels = [
  {copy: "Hi. I'm Sam"},
  {copy: 'I am currently based in Liverpool'},
  {copy: '(a very cool city)'},
  {copy: 'I am a technical/ creative artworker'},
  {copy: 'I love all things digital design'}
]

function stick(x, y) {
  console.log('stick run')

  z = z + 1
  const rotation = Math.floor(Math.random() * 30) - 15
  console.log('x = ', x, ' y = ', y, 'rotation = ', rotation)

  //Creates a new p element and inserts text
  var para = document.createElement('div')
  para.innerHTML = labels[slide].copy
  para.classList.add('label')
  para.style.left = `${x}px`
  para.style.top = `${y}px`
  para.style.transform = `rotate(${rotation}deg) translate(-50%, -50%)`
  para.style.zIndex = z
  //appends text to stickerspace
  document.getElementById('stickerSpace').appendChild(para)
  slide = slide + 1
}

stickerSpace.addEventListener('click', function(e) {
  console.log('clicked')
  cursorX = e.clientX
  cursorY = e.clientY
  stick(cursorX, cursorY)
})


