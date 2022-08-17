import { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let req = await fetch('/users', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username })
        })
        let res = await req.JSON();
        console.log('res', res)
    }

    return (
        <form className="login-form">
            <input type="text" placeholder="Enter username"></input>
            <input type="password" placeholder="Enter password"></input>
            <button onSubmit={handleSubmit}>Login</button>
        </form>
    )
};

export default LoginForm;