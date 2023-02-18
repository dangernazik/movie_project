import axios from "axios";

import {baseURL} from "../config";


const apiService = axios.create({baseURL});
apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmI2MjdlMDA0Y2MyZWYzOTliN2FhNmZlZGNlYWFkZSIsInN1YiI6IjYzZWU3YWIxODhiMTQ4MDBjNzMzMzE3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6bMPD3HytSVFir7zR2m1VabgIt6WV1kmH0_TW0hQmC8`
    return config
})

export {apiService}