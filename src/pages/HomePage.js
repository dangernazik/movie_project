import React from 'react';

import {MoviesList} from "../components";
import css from '../components/MovieListCard/MovieListCard.module.css'

const HomePage = () => {
    return (
        <div>
            <div className={css.collage}>
                <img src="https://www.wallpaperflare.com/static/1017/842/358/tv-banshee-breaking-bad-vikings-wallpaper.jpg" alt="list"/>
            </div>
        <MoviesList/>
        </div>
    );
};

export {HomePage};