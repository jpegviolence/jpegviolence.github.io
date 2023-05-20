const allItems = document.querySelectorAll('.gallery-item')
const popupImg = document.querySelector('div.popup-content > img')
const popupField = document.querySelector('.popup-field')
const closeBtn = document.querySelector('.popup-close-btn')

// перебираю все ячейки галереи и ищу на какую конкретно нажали 
allItems.forEach(item => item.addEventListener('click', function (e) {
    clickedImg = item.querySelector('img').getAttribute('src') //получаю путь картинки, на которую кликнули
    popupImg.setAttribute('src', clickedImg) //передаю его картинке в попапе

    // делаю попап видимым
    popupField.style.visibility = 'visible' 
    popupField.style.opacity = '1'
}))

// функция для закрытия попапа (делаю его невидимым)
function closePopup(){
    popupField.style.visibility = 'hidden'
    popupField.style.opacity = '0'
}

// закрываем попап при нажатии на кнопку
closeBtn.addEventListener('click', function () {
    closePopup()
})

// закрываем попап при нажатии на любой участок попапа
popupField.addEventListener('click', function () {
    closePopup()
})