import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


const Pagination = ({  }) => {
    const {movies, currentPage} = useSelector(state => state.movies);

    return (
        <div>
            <div style={{width: "100vw"}}>
                <Link to={`page=${currentPage}`}>
                    <button>prev</button>
                </Link>
                <Link to={`page=${currentPage}`}>
                    <button>next</button>
                </Link>
            </div>
        </div>
    );
};

export {Pagination};