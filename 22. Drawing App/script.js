// Drawing

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

//Initial values
const colorEl = document.getElementById('color')
const sizeEl = document.getElementById('size')


let size = parseInt(sizeEl.getAttribute('data-value'))
let paintMode = true
let isPressed = false
const BG_COLOR = '#f5f5f5';
let color = colorEl.value
let x, y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY

    drawCircle(x, y)
})

window.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

// Controls

const decs = document.getElementById('decrease')
const incs = document.getElementById('increase')
const clear = document.getElementById('clear')
const erase = document.getElementById('eraser')

decs.addEventListener('click', () => {
    (size > 5) ? size -= 5 : size = 5
    updateSizeEl()
})
incs.addEventListener('click', () => {
    (size < 50) ? size += 5 : size = 50
    updateSizeEl()
})

sizeEl.addEventListener('click', () => {
    size = 20
    updateSizeEl()
})

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})


colorEl.addEventListener('change', (e) => {
    color = e.target.value
})

colorEl.addEventListener('click', () => {
    erase.classList.remove('active')
    colorEl.classList.add('active')
    paintMode = true
    color = colorEl.value
})

erase.addEventListener('click', () => {
    if(paintMode) {
        colorEl.classList.remove('active')
        erase.classList.add('active')
        color = BG_COLOR
        console.log(!paintMode)
        return paintMode = false
    } else {
        erase.classList.remove('active')
        color = colorEl.value
    }
    return paintMode = true
})

function updateSizeEl() {
    sizeEl.innerText = size;
}
