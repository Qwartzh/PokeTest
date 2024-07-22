console.log('Script.js lié')

const pikachu = document.querySelector('.image')

const btnLeft = document.querySelector('#leftBtn')
const btnCenter = document.querySelector('#centerBtn')
const btnRight = document.querySelector('#rightBtn')

function moveLeft (){
    pikachu.classList.remove('right')
    pikachu.classList.add('left')

    
}
btnLeft.addEventListener('click',moveLeft)

function moveRight () {
    pikachu.classList.remove('left')
    pikachu.classList.add('right')
}
btnRight.addEventListener('click', moveRight)

function moveCenter (){
    pikachu.classList.remove('right', 'left')
}
btnCenter.addEventListener('click', moveCenter)