const burgerBG = document.querySelector('.burger-bg')
const burgerBtn = document.querySelector('.burger-btn')
const headerShow = document.querySelector('.header_content')
const body = document.body

burgerBtn.addEventListener('click', function(){
    burgerBG.classList.toggle('active')
    headerShow.classList.toggle('active')
    this.classList.toggle('active')
    body.classList.toggle('scroll-disable')
})

window.addEventListener("orientationchange", function () {
    body.classList.remove('scroll-disable')
    burgerBG.classList.remove('active')
    burgerBtn.classList.remove('active')
    headerShow.classList.remove('active')
  })