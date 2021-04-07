const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const cInt = +counter.innerText;

        const increment = target / 200

        if (cInt < target) {
            counter.innerText = `${Math.ceil(cInt + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target;
        }
    }
    updateCounter();
})
