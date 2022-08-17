import { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let req = await fetch('/users', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ 
                "username": username,
                "password": password,
             })
        })
        let res = await req.JSON();
        console.log('res', res)
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                onChange={(e) => setUsername(e.target.value)}
                value={username} 
                placeholder="Enter username"
            />
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
                placeholder="Enter password"
            />
            <button className="login-btn" type="submit">Login</button>
        </form>
    )
};

export default LoginForm;