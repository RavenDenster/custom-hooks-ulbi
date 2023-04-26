import React from 'react';
import useInput from '../hooks/useInput';

const Delay = () => {

    const username = useInput('')
    const password = useInput('')
    //console.log(username)

    return (
        <>
            <input {...username} type='text' placeholder='username' />
            <input {...password} type='text' placeholder='password' />
            <button onClick={() => console.log(username.value, password.value)}>Click</button>
        </>
    )
}

export default Delay