import React from 'react';
import {Link} from "react-router-dom";

const Genre = ({genre}) => {
    const {name, id} = genre
    return (
        <Link to={`/genre/${id}/${name}`}>
            <p>{ name }</p>
        </Link>
    );
};

export {Genre};