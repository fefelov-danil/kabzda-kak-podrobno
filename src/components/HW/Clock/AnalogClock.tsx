import React, {useEffect, useState} from 'react';
import s from "./Clock.module.css";

export const AnalogClock = () => {
    const [date, setDate] = useState(new Date())
    const calcCoefficient = (time: number, circle: number) => {
        return 360 / circle * time
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(state => new Date())
        }, 1000)

        return () => clearInterval(intervalId)

    }, [])

    const hours = calcCoefficient(date.getHours(), 24)
    const minutes = calcCoefficient(date.getMinutes(), 60)
    const seconds = calcCoefficient(date.getSeconds(), 60)
    return (
        <div className={s.analogClocks}>
            <div className={`${s.clockHand} ${s.hoursHand}`} style={{transform: `rotate(${hours}deg) translate(-50%, -50%)`}}></div>
            <div className={`${s.clockHand} ${s.minuteHand}`} style={{transform: `rotate(${minutes}deg) translate(-50%, -50%)`}}></div>
            <div className={`${s.clockHand} ${s.secondHand}`} style={{transform: `rotate(${seconds}deg) translate(-50%, -50%)`}}></div>
            <div className={s.center}></div>
        </div>
    );
};