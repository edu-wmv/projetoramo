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