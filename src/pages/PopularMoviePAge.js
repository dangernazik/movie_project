import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "../hooks/useTheme";
import {movieActions} from "../redux";
import css from "../components/MovieList/MovieList.module.css";
import {MoviesListCard} from "../components";

const PopularMoviePAge = () => {

    const dispatch = useDispatch();
    const {movies, currentPage} = useSelector(state => state.movies);

    const {theme, setTheme} = useTheme();


    useEffect(() => {
        dispatch(movieActions.getPopularMovies({currentPage}))
    }, [currentPage, dispatch])


    return (
        <div className={css.Wrap} >
            <div className={css.title_genre}>
                <h2>Top rated films:</h2>
            </div>
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
export {PopularMoviePAge};