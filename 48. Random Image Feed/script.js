const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10

for(let i = 0; i < rows * 3; i++) {
    const img = Object.assign(document.createElement('img'), {
        src: `${unsplashURL}${getRandomSize()}`
    })
    container.appendChild(img)
}

console.log(getRandom())

function getRandom() {
    return Math.floor(Math.random() * 10) + 300
}

function getRandomSize() {
    return `${getRandom()}x${getRandom()}`
}
