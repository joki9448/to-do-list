import { useState } from 'react';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let req = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })
            })
            let res = await req.json()
            if (req.ok) {
                onLogin(res.username)
            }
            // console.log('res from loginForm', res)
        }   catch (error) {
            alert(error.message)
        }
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