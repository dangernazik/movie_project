import React, {useEffect, useState} from 'react';
import {movieService} from "../services/movieService";
import {useParams} from "react-router-dom";
import {MoviesListCard} from "../components";

const SearchedMoviePage = () => {

    const {search} = useParams()
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        movieService.search(search).then(({data}) => console.log(data.results))
    }, [search])

    return (
        <div>
            {movies.map(card => <MoviesListCard key={card.id} card={card}/>)}
        </div>
    );
};

export {SearchedMoviePage};