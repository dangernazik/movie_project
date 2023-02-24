import {apiService} from "./apiService";
import {urls} from "../config";


const movieService = {
    getAll: (page) => apiService.get(`${urls.movie}${page}`),
    getGenre: (page) => apiService.get(`${urls.genre}${page}`),
    search: (name) => apiService.get(`${urls.search}${name}`),
    getById: (id) => apiService.get(`/movie/${id}`),
    getByGenre: (id, page) => apiService.get(`/discover/movie?page=${page}&with_genres=${id}`),
    getImages: (id) => apiService.get(`/movie/${id}/images`)
}

export {
    movieService
}