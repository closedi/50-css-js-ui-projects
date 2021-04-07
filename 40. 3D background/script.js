const btn = document.getElementById('btn')
const boxesEL = document.getElementById('boxes')

const boxes = boxesEL.querySelectorAll('.box')

let X = 0
let Y = 125
let i = 0

boxes.forEach((box, idx) => {

    if(idx % 4 === 0) {
        Y -= 125
        i = 0
        X = -125 * i
    } else {
        i++
        X = -125 * i
    }

    console.log(X, Y, idx)
    box.style.backgroundPosition = `${X}px ${Y}px`
})

btn.addEventListener('click', () => boxesEL.classList.toggle('big'))
