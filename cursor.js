const cursorContainer = document.querySelector("body");
let cursor = "";

const createCursor = function() {
  cursor = document.createElement("div");
  cursor.classList.add("cursor");
  cursorContainer.appendChild(cursor);
};

const lockCursor = function(cursor, x, y) {
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
};

createCursor();

document.addEventListener("mousemove", function(e) {
  lockCursor(cursor, e.pageX, e.pageY);
});

document.addEventListener("scroll", function(e) {
  lockCursor(cursor, e.pageX + window.pageXOffset, e.pageY + window.pageYOffset);
})