const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []
filter.focus()
getData()

filter.addEventListener('input', (e) => filterData(e.target.value) && filter.focus())

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()

    result.innerHTML = ''
    results.forEach(user => {
        const li = Object.assign(document.createElement('li'),
            {innerHTML: `
        <img src="${user.picture.thumbnail.toString()}" alt="${user.name.first}">
        <div class="user-info">
          <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
          <p>${user.location.city}, ${user.location.country}</p>
        </div>
      `
            })

        listItems.push(li)
        result.appendChild(li)
    })
}


function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
