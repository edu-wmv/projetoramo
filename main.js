var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  coverflowEffect: {
    rotate: 0,
  }
});