import { useState } from 'react';

function LoginForm({ onLogin, handleIsSignUpFormVisible }) {
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
            if (req.status === 201) {
                onLogin(res.username)
            } else if (!username || !password) {
                alert('Please enter username or password')
            } else if (req.status === 401) {
                alert('Invalid username or password!')
            }
        }   catch (error) {
            alert(error.messages)
        }
    }

    return (
        <>
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
            <button className="signup-btn" onClick={() => handleIsSignUpFormVisible(true)}>Sign Up</button>
        </>
    )
};

export default LoginForm;