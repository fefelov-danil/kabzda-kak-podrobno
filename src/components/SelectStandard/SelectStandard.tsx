import React, {useState} from 'react';
import s from './Selectes.module.css'

type itemsType = {
    item: string
    value: string
}

export type SelectPropsType = {
    value: string
    items: itemsType[]
    onChangeSelect?: (value: string) => void
}

export const SelectStandard = (props: SelectPropsType) => {
    const [value, setValue] = useState<string>(props.value)
    const onChangeHandler = (value: string) => {
        setValue(value)
        props.onChangeSelect && props.onChangeSelect(value)
    }
    return (
        <div className={s.select}>
            <select value={value} onChange={(e) => onChangeHandler(e.currentTarget.value)}>
                {
                    props.items.map(o => {
                        return (
                            <option value={o.value}>{o.item}</option>
                        )
                    })
                }
            </select>
        </div>

    );
};