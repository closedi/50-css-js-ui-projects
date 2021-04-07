const ratings = document.querySelectorAll('.rating')
const send = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = ''

panel.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.parentNode.lastChild.previousSibling.innerHTML
        console.log(selectedRating)
    } else if(e.target.classList.contains('rating')) {
        removeActive()
        e.target.classList.add('active')
        selectedRating = e.target.lastChild.previousSibling.innerHTML
        console.log(selectedRating)
    }
})

send.addEventListener('click', (e) => {
    if(selectedRating) {
        e.stopPropagation()
        panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br/>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support.</p>
    `
    }
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}
