import React, {useEffect, useState} from 'react';
import s from '../../../styles/Container.module.css'

export const UseEffectSimple = () => {
    console.log('Rendering a Component')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return (
        <div>
            Hello {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake +</button>
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
        </div>
    );
};

export const UseEffectSetTimeout = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])

    return (
        <div className={s.container}>
            Hello {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>{fake}+</button>
            <button onClick={() => setCounter(counter + 1)}>{counter} +</button>
        </div>
    );
}