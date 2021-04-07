const btn = document.getElementById('like')
const card = document.querySelector('.card')
const counter = document.querySelector('.counter')
let currentLikes = 0

btn.addEventListener('click', () => {
    if(btn.classList.contains('fill')) {
        currentLikes--
    } else {
        currentLikes++
    }
    updateLikes()
    btn.classList.toggle('fill')
})

card.addEventListener('dblclick', (e) => {
    currentLikes++
    updateLikes()
    let x1 = e.clientX
    let y1 = e.clientY
    let x2 =  card.getBoundingClientRect().x
    let y2 = card.getBoundingClientRect().y

    let posX = x1 - x2
    let posY = y1 - y2

    const bubble = document.createElement('i')
    bubble.classList.add('fas', 'fa-heart', 'bubble')
    bubble.style.left = posX + 'px';
    bubble.style.top = posY + 'px';
    card.appendChild(bubble)

    setTimeout(() => bubble.remove(),1000)
})

function updateLikes() {
    counter.innerText = currentLikes;
}
