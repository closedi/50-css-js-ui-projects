const key = document.querySelector('#insert');

let _key;
window.addEventListener('keydown', (e) => {
        if (_key === e.key) {
            console.log('same')
        } else {
            key.innerHTML = `
        <div class="key"> ${(e.key === ' ') ? 'Space' : e.key} <small>event.key</small></div>
        <div class="key"> ${e.keyCode} <small>event.keyCode</small></div>
        <div class="key"> ${e.code} <small>event.code</small></div>`;
            _key = e.key;
        }
    }
)
