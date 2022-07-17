import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

const conversionTime = (num: number) => num < 10 ? '0' + num : num

export const DigitalClock = () => {
    const currentTime = (date: Date) => {
        const hours = conversionTime(date.getHours())
        const minutes =  conversionTime(date.getMinutes())
        const seconds = conversionTime(date.getSeconds())

        return `${hours}:${minutes}:${seconds}`
    }

    const [time, setTime] = useState(currentTime(new Date()))

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(state => currentTime(new Date()))
        }, 1000)

        return () => clearInterval(intervalId)

    }, [])

    return (
        <div className={s.digitalClock}>
            <span>{time}</span>
        </div>
    );
};