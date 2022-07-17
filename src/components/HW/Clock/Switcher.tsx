import React, {useState} from 'react';
import s from './Clock.module.css'

type ChangeClockPropsType = {
    on: boolean
    firstChoice: string
    secondChoice: string
    switch: () => void
}

export const Switcher = (props: ChangeClockPropsType) => {
    const [on, setOn] = useState(props.on)
    const onClickHandler = () => {
        props.switch()
        setOn(!on)
    }

    return (
        <div className={on ? `${s.switcher} ${s.on}` : `${s.switcher} ${s.off}` } onClick={onClickHandler}>
            <span>{props.firstChoice}</span>
            <span>{props.secondChoice}</span>
        </div>
    );
};