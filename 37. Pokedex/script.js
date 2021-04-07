const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const color = {
    fire: '#FDDFDF',
    grass: '#defde0',
    electric: '#fcf7de',
    water: '#def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    phychic: '#eaeda1',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5',
}

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    let filteredData;

    if(!localStorage.getItem(id)) {
        const url = `http://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        const data = await res.json()
            .then(data => {
               return filteredData = {id: data.id, name: data.name, type: data.types[0].type.name}
            })
            .then((data) => localStorage.setItem(`${id}`, JSON.stringify(filteredData)))

    } else {
        filteredData = JSON.parse(localStorage.getItem(id))
        console.log(filteredData)
    }

    createPokemonCard(filteredData)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const type = pokemon.type
    const id = pokemon.id.toString().padStart(3, '0')

    pokemonEl.innerHTML = `
    <div class="img-container">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="poke">
    </div>
    <div class="info">
      <span class="number">${'#' + id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
`

    pokemonEl.style.backgroundColor = color[type]

    poke_container.appendChild(pokemonEl)
}

fetchPokemons();
