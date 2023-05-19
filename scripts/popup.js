const allItems = document.querySelectorAll('.gallery-item')
const popupImg = document.querySelector('div.popup-content > img')
const popupField = document.querySelector('.popup-field')
const closeBtn = document.querySelector('.popup-close-btn')

allItems.forEach(item => item.addEventListener('click', function (e) {
    clickedImg = item.querySelector('img').getAttribute('src')
    popupImg.setAttribute('src', clickedImg)

    popupField.style.visibility = 'visible'
    popupField.style.opacity = '1'
}))

function closePopup(){
    popupField.style.visibility = 'hidden'
    popupField.style.opacity = '0'
}

closeBtn.addEventListener('click', function () {
    closePopup()
})

popupField.addEventListener('click', function () {
    closePopup()
})