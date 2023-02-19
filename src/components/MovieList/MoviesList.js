import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MoviesListCard} from "../MovieListCard/MoviesListCard";
import {movieActions} from "../../redux";
import css from "./MovieList.module.css"
import {useTheme} from "../../hooks/useTheme";
import {Pagination} from "../pagination/Pagination";
import {Link} from "react-router-dom";


const MoviesList = () => {


    const dispatch = useDispatch();
    const {movies, currentPage} = useSelector(state => state.movies);

    const {theme, setTheme} = useTheme();


    useEffect(() => {
        dispatch(movieActions.getMovies())
    }, [currentPage])


    return (
        <div className={css.Wrap}>
            <Pagination/>
            {movies.map(card => <MoviesListCard key={card.id} card={card}/>)}
        </div>

    );
};

export {MoviesList};