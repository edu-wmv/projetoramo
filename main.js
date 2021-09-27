var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  loop: true,
  coverflowEffect: {
    rotate: 0,
  }
});