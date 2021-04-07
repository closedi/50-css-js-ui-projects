const body = document.body
const slides = document.querySelectorAll('.slide')
const left = document.getElementById('left')
const right = document.getElementById('right')

let activeSlide = 0;
setBgToBody();

body.focus();
body.addEventListener('keydown', e => {
    if(e.key === 'ArrowLeft') {
        decrementSlide()
    } else if(e.key === 'ArrowRight') {
        incrementSlide();
    }
})

right.addEventListener('click', incrementSlide)

left.addEventListener('click', decrementSlide)

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
    slides[activeSlide].classList.add('active')
}

function incrementSlide() {
    activeSlide++;
    if(activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setBgToBody();
    setActiveSlide();
}

function decrementSlide() {
    activeSlide--;
    if(activeSlide < 0) {
        activeSlide = slides.length - 1
    }
    setBgToBody();
    setActiveSlide();
}
