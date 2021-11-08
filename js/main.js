const backToTop = document.querySelector('.back-to-top')

window.addEventListener('scroll', function() {
  if(this.scrollY >= 1000) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
})