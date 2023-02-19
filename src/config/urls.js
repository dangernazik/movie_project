const baseURL = 'https://api.themoviedb.org/3'

const urls = {
    movie: `/discover/movie?api_key=46b627e004cc2ef399b7aa6fedceaade`,
    genre: '/genre/movie/list?api_key=46b627e004cc2ef399b7aa6fedceaade',
    search: '/search/keyword?query='
}


export{baseURL, urls}