const goodEl = document.getElementById('good')
const cheapEl = document.getElementById('cheap')
const fastEl = document.getElementById('fast')


cheapEl.addEventListener('input', (e) => doTheTrick(e.target))
goodEl.addEventListener('input', (e) => doTheTrick(e.target))
fastEl.addEventListener('input', (e) => doTheTrick(e.target))

function doTheTrick(theClickedOne) {
    if(goodEl.checked && cheapEl.checked && fastEl.checked) {
        if(goodEl === theClickedOne) {
            fastEl.checked = false
        }
        if(cheapEl === theClickedOne) {
            goodEl.checked = false
        }
        if(fastEl === theClickedOne) {
            cheapEl.checked = false
        }
    }
}
