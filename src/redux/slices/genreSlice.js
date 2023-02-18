import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";

const initialState = {
    genres: [],
};


const getGenre = createAsyncThunk(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenre();
            return data.genres
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    extraReducers: (value) =>
        value
            .addCase(getGenre.fulfilled, (state, action) => {
                state.loading = false
                state.genres = action.payload
            })
            .addCase(getGenre.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getGenre.pending, (state, action) => {
                state.loading = true
            })
});

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getGenre
}

export {
    genreActions,
    genreReducer,
}