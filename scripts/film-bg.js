let filmBG = document.querySelector('.films-bg')
let id //id получаемой ссылки

// массив с картинками для бэкграунда
const BGpics = ["url(img/ISA/ISA.jpg)",
    "url(img/irreversible/irreversible.jpg)",
    "url(img/ETV/ETV.jpg)",
    "url(img/love/love.jpg)",
    "url(img/climax/climax.jpg)",
    "url(img/vortex/vortex.jpg)"]

//при наведении на ссылку из списка с id films получаем id ссылки
document.querySelector('#films').addEventListener('mouseover', function (e) {
    id = Number(e.target.id);
    filmBG.classList.add('films-bg-anim') //добавляем анимацию
    setTimeout(removeAnim, 500) //через полсекунды убираем ее

    filmBG.style.backgroundImage = BGpics[id] //берем картинку из массива в соответствии с id ссылки
});

//функция, убирающая анимацию
function removeAnim() {
    filmBG.classList.remove('films-bg-anim')
}

//когда уводим мышь с ссылки убираем анимацию
document.querySelector('#films').addEventListener('mouseout', function (e) {
    removeAnim()
});