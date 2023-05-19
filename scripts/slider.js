const images = document.querySelectorAll('.slider .all-slides img') //получаем все картинки
const allSlides = document.querySelector('.slider .all-slides') //получаем стили слайдов
let count = 0 //подсчет слайдов
let width //ширина

//функция для подгона картинки под размеры слайдера
function imgResize() {
    width = document.querySelector('.slider').offsetWidth //получаем ширину слайдера
    allSlides.style.width = width * images.length + 'px' //рассчитываем ширину линии со слайдами (ширина_слайдера*кол-во_картинок)
    images.forEach(item => {
        item.style.width = width + 'px' //делаем ширину каждой картинки равной ширине слайдера
        item.style.height = 'auto' //делаем высоту картинки auto для сохранения пропорций
    })
    sliderRoll() //все время обновляем сдвиг, чтобы при изменении размера экрана расположение слайдов не сбивалось
}

imgResize() //вызываем функцию при загрузке страницы
window.addEventListener('resize', imgResize) //меняем размер картинок относительно размера экрана

//листание слайдов вперед
document.querySelector('.slider-next').addEventListener('click', function () {
    count++
    //проверка: если слайды закончились, то возвращаемся на первый
    if (count >= images.length) {
        count = 0
    }
    sliderRoll()
})

//листание слайдов назад
document.querySelector('.slider-prev').addEventListener('click', function () {
    count--
    //проверка: если дошли до первого слайда, то возвращаемся на последний
    if (count < 0) {
        count = images.length - 1
    }
    sliderRoll()
});

//функция чтобы двигать слайды
function sliderRoll() {
    allSlides.style.transform = 'translate(-' + count * width + 'px)' //смещаем линию со слайдеров влево 
}