import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MoviesListCard} from "../MovieListCard/MoviesListCard";
import {movieActions} from "../../redux";
import css from "./MovieList.module.css"
import {useTheme} from "../../hooks/useTheme";

const MoviesList = () => {


    const dispatch = useDispatch();
    const {movies, currentPage} = useSelector(state => state.movies);

    const {theme, setTheme} = useTheme();


    useEffect(() => {
        dispatch(movieActions.getMovies({currentPage}))
    }, [currentPage, dispatch])


    return (
        <div className={css.Wrap} >

            {movies.map(card => <MoviesListCard key={card.id} card={card}/>)}
            <div className={'buttons_pagination'}>
            <button  disabled={currentPage === 1} onClick={() =>
                dispatch(movieActions.setCurrentPage(currentPage - 1 ))
            }>prev</button>
            <button  disabled={currentPage === 500} onClick={() => dispatch(movieActions.setCurrentPage(currentPage + 1 ))}>next</button>
            </div>
        </div>

    );
};

export {MoviesList};