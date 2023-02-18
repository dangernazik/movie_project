import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux";
import {Genre} from "../Genre/Genre";
import css from '../Header/Header.module.css'



const Genres = () => {
    const dispatch = useDispatch()
    const {genres} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreActions.getGenre())
    }, [])

    return (
        <div className={css.genre_div}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};