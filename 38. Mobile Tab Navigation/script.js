const imgs = document.querySelectorAll('.phone img')
const navs = document.querySelectorAll('nav ul li')

navs.forEach((nav,idx) => {
    nav.addEventListener('click', () => {
        navs.forEach((nav, idx) => {
            nav.classList.remove('active')
            imgs[idx].classList.remove('show')
        })

        nav.classList.add('active')
        imgs[idx].classList.add('show')
    })
})
