import React, { useRef } from 'react';
import { useState } from 'react';
import useScroll from '../hooks/useScroll';

const List = () => {
    const [todos, setTodos] = useState([])
    const [page, setPage] = useState(1)
    const limit = 20
    const parentRef = useRef()
    const childRef = useRef()
    const intersected = useScroll(parentRef, childRef, () => fetchTodods(page, limit))

    function fetchTodods(pag, limi) { // это как параметры / мы меняем const .. = на function, чтобы обращаться до объявления
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limi}&_page=${pag}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]) // setTodos это функция, а prev это предыдущие состояние
                setPage(prev => prev + 1)
            })
    }

    return (
        <div ref={parentRef} style={{height: '88vh', overflow: 'auto'}}>
            {todos.map(todo =>
                <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
                    {todo.id}.{todo.title}
                </div>
            )}
            <div ref={childRef} style={{ height: 1, background: 'green' }}></div>
        </div>
    )
}

export default List