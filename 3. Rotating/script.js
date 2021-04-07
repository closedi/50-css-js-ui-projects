const container = document.querySelector('.container');
const open = document.querySelector('#open')
const close = document.querySelector('#close')

let openState = false;

open.addEventListener('click', () => {
    if(!openState) {
        container.classList.add('show-nav');
    }
   return openState = true;
})

close.addEventListener('click', () => {
    if(openState) {
        container.classList.remove('show-nav')
    }
    return openState = false;
})
