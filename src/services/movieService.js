import {apiService} from "./apiService";
import {urls} from "../config";


const movieService = {
    getAll: () => apiService.get(`${urls.movie}`),
    getNext: (page) => apiService.get(`${urls.movie}&page=${page}`),
    getGenre: () => apiService.get(urls.genre),
    search: (name) => apiService.get(`${urls.search}${name}`),
    getById: (id) => apiService.get(`/movie/${id}?api_key=46b627e004cc2ef399b7aa6fedceaade`),
    getByGenre: (id, page) => apiService.get(`/discover/movie?page=${page}&api_key=46b627e004cc2ef399b7aa6fedceaade&with_genres=${id}`)
}

export {
    movieService
}