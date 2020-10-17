var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider-button__next",
    prevEl: ".hotel-slider-button__prev",
  },
});

var reviwesSlider = new Swiper(".reviwes-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviwes-swiper-button__next",
    prevEl: ".reviwes-swiper-button__prev",
  },
});

var menuButton = document.querySelector(".button-top");
menuButton.addEventListener("click", function () {
  document
    .querySelector(".navbar__menu")
    .classList.toggle("navbar__menu--visible")
    .querySelector(".navigation__items")
    .classList.toggle("navigation__items--mobile_visible");
});
