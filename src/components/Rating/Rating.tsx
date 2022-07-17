import React from "react";
import {RatingValueType} from "../../pages/Ratings";
import s from "./Rating.module.css";

type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {

    return (
        <div className={s.rating}>
            <Star selected={1 <= props.value} setRatingControlled={ () => props.setRatingValue(1) }/>
            <Star selected={2 <= props.value} setRatingControlled={ () => props.setRatingValue(2) }/>
            <Star selected={3 <= props.value} setRatingControlled={ () => props.setRatingValue(3) }/>
            <Star selected={4 <= props.value} setRatingControlled={ () => props.setRatingValue(4) }/>
            <Star selected={5 <= props.value} setRatingControlled={ () => props.setRatingValue(5) }/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRatingControlled: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.setRatingControlled}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
}