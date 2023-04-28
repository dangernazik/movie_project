import {apiService} from "./apiService";
import {urls} from "../config";


const movieService = {
    getAll: (page) => apiService.get(`${urls.movie}${page}`),
    getGenre: (page) => apiService.get(`${urls.genre}${page}`),
    getTopRated: (page) => apiService.get(`/movie/top_rated`),
    search: (name, page) => apiService.get(`${urls.search}${name}&page=${page}`),
    getById: (id) => apiService.get(`/movie/${id}`),
    getByGenre: (id, page) => apiService.get(`/discover/movie?page=${page}&with_genres=${id}`),
    getImages: (id) => apiService.get(`/movie/${id}/images`),
    getVideos: (id,) => apiService.get(`/movie/${id}/videos`),
}

export {
    movieService
}