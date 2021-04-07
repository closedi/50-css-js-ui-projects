const carousel = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const images = carousel.querySelectorAll('img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++

    changeImg()
}

function changeImg() {
    if(idx > images.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = images.length - 1
    }
    carousel.style.transform = `translateX(${-idx*500}px)`
}

rightBtn.addEventListener('click', () => {
    idx++

    changeImg()
    resetInterval()
})
leftBtn.addEventListener('click', () => {
    idx--

    changeImg()
    resetInterval()
})


function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}
