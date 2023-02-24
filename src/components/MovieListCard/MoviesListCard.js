import React from 'react';
import css from '../MovieListCard/MovieListCard.module.css'
import {useTheme} from "../../hooks/useTheme";
import {Link} from "react-router-dom";
import {StarsRating} from "../StarsRating/StarsRating";

const MoviesListCard = ({card}) => {

    const {title, poster_path,id, vote_average} = card
    const {theme, setTheme} = useTheme();

    return (
        <Link className={css.Card} to={`/movie/${id}`}>
            <div className={css.image}>
                <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={title}/>
            </div>
            <StarsRating vote_average={vote_average}/>
            <h2 className={css.title}>{title}</h2>
        </Link>
    );
};

export {MoviesListCard};