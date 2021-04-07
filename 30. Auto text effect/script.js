const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Wake up, Neo. Matrix has you. Follow the white rabbit. Knock knock...'
let speed = 300 / speedEl.value
let idx = 1

setTimeout(() => writeText(), 3000)

function cl() {
    console.log(...arguments)
}

speedEl.addEventListener('change', (e) => {
  return speed = 300 / e.target.value
})

function writeText() {
   textEl.innerText = text.slice(0, idx)
    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


