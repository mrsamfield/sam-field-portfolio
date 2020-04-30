const cursorContainer = document.querySelector("body");
let cursor = "";

const createCursor = function() {
  cursor = document.createElement("div");
  cursor.classList.add("cursor");
  cursor.innerHTML = '<p class="x">Hi!</p> <p class="y">Bienvenue!</p>'
  cursorContainer.appendChild(cursor);
};

const lockCursor = function(cursor, x, y) {
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
};

createCursor();
const xLabel = document.querySelector("div.cursor p.x")
const yLabel = document.querySelector("div.cursor p.y")

document.addEventListener("mousemove", function(e) {
  const x = e.pageX
  const y = e.pageY
  lockCursor(cursor, x, y);
  xLabel.innerHTML = x + "px"
  yLabel.innerHTML = y + "px"
});
