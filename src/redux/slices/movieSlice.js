import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";


const initialState = {
    movies: [],
    currentPage: 1,
    loading: null,
};


const getMovies = createAsyncThunk(
    'movieSlice/getAll',
    async ({currentPage}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(currentPage);
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);




const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }},
    extraReducers: (value) =>
        value
            .addCase(getMovies.fulfilled, (state, action) => {
                state.loading = false
                state.movies = action.payload
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getMovies.pending, (state) => {
                state.loading = true
            })
});

const {reducer: movieReducer, actions: {setCurrentPage}} = movieSlice;

const movieActions = {
    getMovies,
    setCurrentPage
}

export {
    movieActions,
    movieReducer,
}