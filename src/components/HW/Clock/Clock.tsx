import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'
import {Switcher} from "./Switcher";
import {AnalogClock} from "./AnalogClock";
import {DigitalClock} from "./DigitalClock";

type ClockPropsType = {
    analog: boolean
}

export const Clock = (props: ClockPropsType) => {
    const [analogClock, setAnalogClock] = useState(props.analog)

    const switchHandler = () => {
        setAnalogClock(!analogClock)
    }

    return (
        <div className={s.clocks}>
            <Switcher on={true} firstChoice={'Analog'} secondChoice={'Digital'} switch={switchHandler}/>
            {analogClock ? <AnalogClock/> : <DigitalClock/>}
        </div>
    );
};

