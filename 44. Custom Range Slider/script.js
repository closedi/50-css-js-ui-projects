const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
    const labelWidth = getComputedStyle(label).getPropertyValue('width')
    label.innerText = value
    const max = +e.target.max
    const min = +e.target.min
    const offset = scale(value, min, max, 10, -10)
    const left = value * (parseInt(rangeWidth) / max) - (parseInt(labelWidth) / 2) + offset + 'px'

    label.style.left = left

})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
