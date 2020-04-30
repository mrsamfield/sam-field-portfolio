const cursorContainer = document.querySelector("body");
let cursor = "";

const createCursor = function() {
  colsole.log
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
  console.log(cursor, e.pageX, e.pageY)
});
