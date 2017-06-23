'use strict';

(function() {
  var popupOpen = document.querySelector(".featured__btn");
  var popupWindow = document.querySelector(".modal");
  var screenCover = document.querySelector(".modal-overlay");

  popupOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    screenCover.classList.add("modal-overlay--opened");
    popupWindow.classList.add("modal--opened");
  });
  screenCover.addEventListener("click", function (evt) {
    evt.preventDefault();
    screenCover.classList.remove("modal-overlay--opened");
    popupWindow.classList.remove("modal--opened");
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupWindow.classList.contains("modal--opened")) {
        screenCover.classList.remove("modal-overlay--opened");
        popupWindow.classList.remove("modal--opened");
      }
    }
  })
})();
