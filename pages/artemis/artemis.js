const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*---------------------------------------------*/

function scrollHeader() {
  const header = document.getElementById('header')
  if(this.scrollY >= 80){ 
    header.classList.add('scroll-header');
   } else { 
    header.classList.remove('scroll-header');
   }
}

window.addEventListener('scroll', scrollHeader)

/*---------------------------------------------*/

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 200){
    scrollUp.classList.add('show-scroll'); 
  } else { 
    scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollUp)

/*---------------------------------------------*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 45,
  slidesPerGroup: 1,
  loop: true,
  centeredSlides: true,
  loopFillGroupWithBlank: true,
  mousewheel: {
    eventsTarget: '.news-box'
  },
  breakpoints: {
    320: {
      spaceBetween: 15
    },
  }
});