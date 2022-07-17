import React, {useCallback, useMemo, useState} from 'react';
import s from '../../../styles/Container.module.css'

export const UseMemoUseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'Css', 'HTML'])

    const newArray = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('a') > -1)
    }, [books])

    const addBook = useCallback(() => {
        const newBooks = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return (
        <div className={s.container}>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => addBook()}>add book</button>
            {counter}
            <Book books={newArray} addBook={addBook}/>
        </div>
    );
};

const BookSecret = ( props: {books: Array<string>; addBook: () => void} ) => {
    return <div className={s.container}>
        <button onClick={() => props.addBook()}>add book</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Book = React.memo(BookSecret)