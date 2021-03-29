const menuBtn = document.querySelector('.nav-button')
const menuBg = document.querySelector('.bg')
const menuNav = document.querySelector('.nav')
const callBtn = document.querySelector('.contact__button')
const popUp = document.querySelector('.pop-up')

let checkClass = false

function classTogle() {
    if (!checkClass) {
        menuBtn.classList.add('active')
        callBtn.classList.add('active')
        menuBg.classList.add('active')
        menuNav.classList.add('active')
        checkClass = true
    } else {
        menuBtn.classList.remove('active')
        menuBg.classList.remove('active')
        menuNav.classList.remove('active')
        callBtn.classList.remove('active')
        checkClass = false
    }
    
}

function popUpOpen() {
    popUp.classList.toggle('active')
}

popUp.addEventListener('click', ev => {
    if (ev.target.classList == 'pop-up') {
        popUpOpen()
    }
})