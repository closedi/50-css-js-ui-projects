const container = document.getElementById('container')
const colors = ['green', 'blue', 'red', 'orange', 'aliceblue', 'steelblue', 'white', 'yellow', 'rebeccapurple']

const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = Object.assign(document.createElement('div'), {
        classList: 'square',
        onmouseover: (e) => setColor(square),
        onmouseout: (e) => removeColor(square),
    })
    container.appendChild(square)
}

function setColor(square) {
    const color = colors[Math.floor(Math.random() * colors.length)]
    square.style.backgroundColor = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(square) {
    square.style.backgroundColor = 'rgba(60, 60, 60, 0.11)'
    square.style.boxShadow = ''
}
