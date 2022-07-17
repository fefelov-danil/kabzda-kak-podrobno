import React, {useState} from 'react';
import {UnControlledRating} from "../components/Rating/UnControlledRating/UnControlledRating";
import {Rating} from "../components/Rating/Rating";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export const Ratings = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <UnControlledRating defaultRating={0}/>
        </div>
    );
};