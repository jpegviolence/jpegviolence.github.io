const burgerBG = document.querySelector('.burger-bg')
const burgerBtn = document.querySelector('.burger-btn')
const headerShow = document.querySelector('.header_content')

burgerBtn.addEventListener('click', function(){
    burgerBG.classList.toggle('active')
    headerShow.classList.toggle('active')
    this.classList.toggle('active')
})