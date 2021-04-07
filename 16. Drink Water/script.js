const smallCups = document.querySelectorAll('.cup-small');
const  liters = document.getElementById('liters');
const  percentage = document.getElementById('percentage');
const  remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if(smallCups.length - 1 !== idx && smallCups[idx].classList.contains('full') &&
        !smallCups[idx].nextElementSibling.classList.contains('full')) {
        console.log('path 1')
        idx = idx - 1
    } else if (smallCups.length - 1 === idx && smallCups[idx].classList.contains('full')) {
        idx = idx - 1
        console.log('path 2')
    }

    smallCups.forEach((cup, i) => {
        if(i <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    if(!fullCups) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0;
    } else  {
        remained.style.visibility = 'visible'
        const goal = parseInt(liters.getAttribute('data-liters-goal'))

        liters.innerText = `${goal - (fullCups * 0.25)}L`
    }
}
