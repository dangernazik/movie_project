import React from 'react';
import {Genres} from "../components";
import {useTheme} from "../hooks/useTheme";
import css from "../components/Header/Header.module.css"

const GenrePage = () => {
    const {theme, setTheme} = useTheme();

    return (
        <div className={css.genres}>
            <Genres/>
        </div>
    );
};

export {GenrePage};