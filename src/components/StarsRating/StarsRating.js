import React from 'react';
import StarRatings from 'react-star-ratings'
import css from '../../components/MovieListCard/MovieListCard.module.css'
const StarsRating = ({vote_average}) => {
        return (
        <div className={css.stars}>
            <StarRatings
                rating={vote_average}
                starRatedColor="deepskyblue"
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="3px"
            />
        </div>
    );
}
;

export {StarsRating};