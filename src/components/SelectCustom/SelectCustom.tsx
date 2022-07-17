import React, {useState} from 'react';
import s from './SelectCustom.module.css'

import './SelectCustom.module.css'

type itemsType = {
    id: string
    value: string
}

export type SelectCustomPropsType = {
    selectedItem?: number
    items: itemsType[]
    onChange?: (value: string) => void
}

export const SelectCustom = (props: SelectCustomPropsType) => {

    const [selectedItem, setSelectedItem] = useState(props.selectedItem
        ? props.items[props.selectedItem]
        : props.items[0])
    const [toggle, setToggle] = useState(false)
    const [hoverEl, setHoverEl] = useState(selectedItem)

    const toggleHandler = () => setToggle(!toggle)
    const blurHandler = () => setToggle(false)

    const changeCurrentElement = (el: itemsType) => {
        setSelectedItem(el)
        setHoverEl(el)
        props.onChange && props.onChange(el.value)
    }

    const onKeyDownChangeHover = (key: string) => {
        key === "ArrowDown"
        && props.items.indexOf(hoverEl) + 1 < props.items.length
        && setHoverEl(props.items[props.items.indexOf(hoverEl) + 1])

        key === "ArrowDown"
        && props.items.indexOf(hoverEl) + 1 < props.items.length
        && setSelectedItem(props.items[props.items.indexOf(hoverEl) + 1]);

        key === "ArrowUp"
        && props.items.indexOf(hoverEl) !== 0
        && setHoverEl(props.items[props.items.indexOf(hoverEl) - 1])

        key === "ArrowUp"
        && props.items.indexOf(hoverEl) !== 0
        && setSelectedItem(props.items[props.items.indexOf(hoverEl) - 1]);
    }

    return (
        <div
            className={toggle ? s.select_custom + ' ' + s.active : s.select_custom}
            onClick={toggleHandler}
            tabIndex={0}
            onKeyDown={(e) => onKeyDownChangeHover(e.key)}
            onBlur={blurHandler}>
            <div className={s.element + ' ' + s.main_element}>
                {selectedItem.value}<span>&#9660;</span>
            </div>
            <div className={s.all_elements}>
                {
                    props.items.map((i, index) => {
                        return toggle
                            ? (
                                <div
                                    key={i.id}
                                    className={hoverEl.id === i.id ? s.element + ' ' + s.hover : s.element}
                                    onMouseEnter={() => setHoverEl(i)}
                                    onClick={() => changeCurrentElement(i)}>
                                    {i.value}
                                </div>
                            )
                            : ''
                    })
                }
            </div>
        </div>
    );
};