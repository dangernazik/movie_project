import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieService} from "../services/movieService";
import {MoviesListCard} from "../components";
import css from ".././components/MovieList/MovieList.module.css"
import {movieActions} from "../redux";


const SearchedMoviePage = () => {
    const dispatch = useDispatch()
    const [movies, setMovie] = useState([]);
    const keywords = localStorage.getItem('keywords') || null;
    const {currentPage} = useSelector(state => state.movies);

    useEffect(() => {
        if(keywords){
            movieService.search(keywords, currentPage).then(({data}) => setMovie(data.results))
        }
        },[keywords, currentPage])


    return (
    <div className={css.Wrap}>
        <div className={css.title_genre}>
            <h2>Searched: <u>{keywords}</u></h2>
        </div>
        {movies.map(card => <MoviesListCard key={card.id} card={card}/>)}
        <div className={'buttons_pagination'}>
            <button  disabled={currentPage === 1} onClick={() =>
                dispatch(movieActions.setCurrentPage(currentPage - 1 ))
            }>prev</button>
            <button  disabled={currentPage === 5} onClick={() => dispatch(movieActions.setCurrentPage(currentPage + 1 ))}>next</button>
        </div>
    </div>
    );
};

export {SearchedMoviePage};