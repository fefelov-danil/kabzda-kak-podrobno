import React, {useEffect, useState} from 'react';
import s from '../../../styles/Container.module.css'

const conversionTime = (num: number) => num < 10 ? '0' + num : num

export const UseEffectClock = () => {
    const currentTime = (date: Date) => {
        const hours = conversionTime(date.getHours())
        const minutes =  conversionTime(date.getMinutes())
        const seconds = conversionTime(date.getSeconds())

        return `${hours}:${minutes}:${seconds}`
    }

    const [time, setTime] = useState(currentTime(new Date()))

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log(111)
            setTime(state => currentTime(new Date()))
        }, 1000)
        
        return () => clearInterval(intervalId)

    }, [])

    return (
        <div className={s.container}>
            {time}
        </div>
    );
};