const pw = document.getElementById('password')
const bg = document.getElementById('background')

pw.addEventListener('input', (e) => {
    const length = e.target.value.length
    bg.style.filter = `blur(${21 - (length * 3)}px)`
    console.log(e.target.value.length, bg.style.filter)
})
