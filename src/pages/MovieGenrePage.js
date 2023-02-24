import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../services/movieService";
import {MoviesListCard} from "../components";
import css from ".././components/MovieList/MovieList.module.css"
import {useTheme} from "../hooks/useTheme";
import {useSelector} from "react-redux";

const MovieGenrePage = () => {
    const {genre_id, genre_name} = useParams()
    const [movies, setMovie] = useState([]);
    const {currentPage} = useSelector(state => state.genres);

    const {theme, setTheme} = useTheme();

    useEffect(() => {
        movieService.getByGenre(genre_id, currentPage).then(({data}) => setMovie(data.results))
    }, [genre_id])

    return (
        <div className={css.Wrap}>
            <div className={css.title_genre}>
                <h2>{genre_name} films</h2>
            </div>
            {movies.map(card => <MoviesListCard key={card.id} card={card}/>)}
        </div>
    );
};

export {MovieGenrePage};