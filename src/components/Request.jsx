import React from 'react';
import useRequest from '../hooks/useRequest';
import axios from 'axios'


const Request = () => {
    const [todos, loading, error] = useRequest(fetchTodos) // передаём саму функцию, а не её вызов

    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`) // возвращает т. к. внутри хука используем then и catch
    }

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }
    if (error) {
        return <h1>Произошла ошибка при загрузки данных</h1>
    }

    return (
        <div>
            {todos && todos.map(todo =>
                <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
                    {todo.id}.{todo.title}
                </div>
            )}
        </div>
    )
}

export default Request