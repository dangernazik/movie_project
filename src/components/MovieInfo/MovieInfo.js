import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import css from './MovieInfo.module.css'

const MovieInfo = () => {
    const {movie_id} = useParams()

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        movieService.getById(movie_id).then(({data}) => setMovie(data))
    }, [movie_id])
    return (
        <div>
            {movie && (
                <div>
                    <div className={css.wrap_img_info}>
                        <div className={css.image}>
                            <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title}/>
                        </div>
                        <div className={css.wrap_info}>
                            <div className={css.title}>
                                <h2>{movie.title}</h2>
                            </div>
                            <div className={css.genre}>
                                Genres: {movie.genres.map(genre => <Link to={`/genre/${genre.id}/${genre.name}`}> {genre.name} </Link>)}
                            </div>
                            <div className={css.production_country}>
                                Production country: {movie.production_countries.map(country => <p>{country.name}</p>)}
                            </div>
                            <div className={css.production_company}>
                                Production company: {movie.production_companies.map(company => <p>{company.name}</p>)}
                            </div>
                        </div>
                    </div>
                    <div className={css.overview}>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export {MovieInfo};