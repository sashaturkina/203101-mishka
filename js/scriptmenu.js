var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var link = document.querySelector(".featured__btn");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal--close");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal--opened");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal--open");
});
