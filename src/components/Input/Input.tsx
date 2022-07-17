import React, {useState} from 'react';
import s from '../../styles/Container.module.css'

export type InputPropsType = {
    onChangeInput?: (value: string) => void
    placeholder?: string
    title?: string
}

export const Input = (props: InputPropsType) => {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (value: string) => {
        setValue(value)
        props.onChangeInput && props.onChangeInput(value)
    }
    return (
        <div className={s.container}>
            <input
                value={value}
                placeholder={props.placeholder && props.placeholder}
                title={props.title && props.title}
                onChange={(e) => onChangeHandler(e.currentTarget.value)}/>
        </div>

    );
};