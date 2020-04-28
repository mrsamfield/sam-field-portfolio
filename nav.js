const toggleTag = document.querySelector("a.toggle-nav")
const arrow = document.querySelector("a.toggle-nav img.arrow")
const mainTag = document.querySelector("div.playground")
const menuLabel = document.querySelector("a.toggle-nav span.menulabel")
const aboutTag = document.querySelector("section.about-me")
const nav = document.querySelector("nav.desktop-nav")
 
toggleTag.addEventListener("click", function(){
  mainTag.classList.toggle("open")
  aboutTag.classList.toggle("open")
  toggleTag.classList.toggle("open")
  arrow.classList.toggle("open")
  nav.classList.toggle("open")
  
  if(mainTag.classList.contains("open")){
    menuLabel.innerHTML = 'Close'
  } else {
    menuLabel.innerHTML = 'Menu'
  }
  
})