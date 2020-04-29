const cursorContainer = document.querySelector("div.cursor-container")

const createCursor = function () {
    const cursor = cursorContainer.appendChild("div")
    cursor.classList.add("cursor")
    
}

const lockCursor = function (cursor, x, y) {
    cursor.style.top = y
    cursor.style.left = x 
}

createCursor()

document.addEventListener("mouseMove", function () {

})