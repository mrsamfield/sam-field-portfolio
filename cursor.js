const cursorContainer = document.querySelector("div.cursor-container")
let cursor = ""

const createCursor = function () {
    cursor = document.createElement("div")
    cursor.classList.add("cursor")
}

const lockCursor = function (cursor, x, y) {
    cursor.style.top = y
    cursor.style.left = x 
}

createCursor()


document.addEventListener("mousemove", function (e) {
  lockCursor(cursor, e.clientX, e.clientY)
})