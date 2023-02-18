import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MoviesListCard} from "../MovieListCard/MoviesListCard";
import {movieActions} from "../../redux";
import css from "./MovieList.module.css"
import {useTheme} from "../../hooks/useTheme";
import {Pagination} from "../pagination/Pagination";


const MoviesList = () => {


    const dispatch = useDispatch();
    const {movies, currentPage} = useSelector(state => state.movies);

    const {theme, setTheme} = useTheme();

    useEffect(() => {
        dispatch(movieActions.getMovies())
    }, [currentPage])


    return (
        <div className={css.Wrap}>
            {movies.map(card => <MoviesListCard key={card.id} card={card} />)}
            <div style={{width: "100vw"}}>
            <Pagination/>
            </div>
        </div>

);
};

export {MoviesList};