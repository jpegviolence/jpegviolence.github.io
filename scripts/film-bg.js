let filmBG = document.querySelector('.films-bg')
let id

document.querySelector('#films').addEventListener('mouseover', function(e){
    id = e.target.id;
    filmBG.classList.add('films-bg-anim')
    setTimeout(removeAnim, 500)
    
    switch(id){
        case '1': 
            filmBG.style.backgroundImage = "url(img/ISA/ISA.jpg)"
        break
        case '2': 
            filmBG.style.backgroundImage = "url(img/irreversible/irreversible.jpg)"
        break
        case '3': 
            filmBG.style.backgroundImage = "url(img/ETV/ETV.jpg)"
        break
        case '4': 
            filmBG.style.backgroundImage = "url(img/love/love.jpg)"
        break
        case '5': 
            filmBG.style.backgroundImage = "url(img/climax/climax.jpg)"
        break
        case '6': 
            filmBG.style.backgroundImage = "url(img/vortex/vortex.jpg)"
        break
    }
});

function removeAnim(){
    filmBG.classList.remove('films-bg-anim')
}

document.querySelector('#films').addEventListener('mouseout', function(e){
    removeAnim()
});