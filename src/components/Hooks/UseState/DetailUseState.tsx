import React, {useState} from 'react';
import s from '../../../styles/Container.module.css'

const calculate = () => {
    // console.log("calculate")
    return 15**8
}

export const DetailUseState = () => {

    const calculate1 = calculate() // если мы поместим calculate1 в useState, то при каждом нажатии + будет вызваться функция

    const [count, setCount] = useState(calculate) // useState запомнит результат вызова и повторно не вызовет функцию

    const changer = (state: number) => { // произойдет вызов changer с параметром текущее значение
        return state + 1
    }

    return (
        <div className={s.container}>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(changer)}>add</button>
            {count}
        </div>
    );
};