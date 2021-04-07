const API_URL = 'https://api.themoviedb.org/3/discover/movie?' +
    'api_key=7e3a5c559bba520c927850bdf58ce21f&language=en-US&' +
    'sort_by=popularity.desc&include_adult=true&' +
    'include_video=false&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?' +
    'api_key=7e3a5c559bba520c927850bdf58ce21f&query="'
getMovies(API_URL);

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const voteClass = (() => {
            if(vote_average >= 7) {
                return 'green'
            } else if(vote_average >= 5) {
                return 'orange'
            } else return 'red'
        })()

        const getPicture = (() => {
            if(poster_path) {
                return IMG_PATH + poster_path
            } else return 'images/null.jpg'
        })()

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${getPicture}" alt="picture">
            <div class="movie-info">
              <h3>${title}</h3>
              <span class="${voteClass}">${(vote_average).toFixed(1)}</span>
            </div>
            <div class="overview">${overview}</div>`

        main.appendChild(movieEl)
    })
}


//DATA example

// {"adult":false,
//     "backdrop_path":"/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
//     "genre_ids":[28,12,14,878],
//     "id":791373,
//     "original_language":"en",
//     "original_title":"Zack Snyder's Justice League",
//     "overview":"Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
//     "popularity":9701.638,
//     "poster_path":"/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
//     "release_date":"2021-03-18",
//     "title":"Zack Snyder's Justice League",
//     "video":false,
//     "vote_average":8.7,
//     "vote_count":4032},
