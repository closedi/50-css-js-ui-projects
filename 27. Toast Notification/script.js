const toasts = document.querySelector('#toasts')
const button = document.querySelector('#button')

const messages = ['Hello', 'Problem solved', 'What\'s the point?']
function getMessage() {
    return messages[Math.floor(Math.random() * (messages.length))]
}

button.addEventListener('click', () => {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerText = `${getMessage()}`
    toasts.appendChild(toast)

   setTimeout(() => {
       toast.classList.add('hidden')
       setTimeout(() => toast.remove(), 400)
       }, 3000)


})
