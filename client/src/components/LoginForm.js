import { useState } from 'react';

function LoginForm({ onLogin, handleIsSignUpFormVisible }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginButtonHovered, setIsLoginButtonHovered] = useState(false);
    const [isSignupButtonHovered, setIsSignupButtonHovered] = useState(false);

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
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1 className="login-header">LOGIN</h1>
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
                <button className="login-btn" 
                        type="submit" 
                        onMouseEnter={() => {setIsLoginButtonHovered(true)}}
                        onMouseLeave={() => {setIsLoginButtonHovered(false)}}
                        style={{
                            backgroundColor: isLoginButtonHovered    ? "white" : "black",
                            color: isLoginButtonHovered ? "black" : "white",
                            // border: isLoginButtonHovered ? "none" : "2px solid black"
                        }}
                >
                Login
                </button>
                <button className="signup-btn" 
                        type="button"
                        onClick={() => handleIsSignUpFormVisible(true)}
                        onMouseEnter={() => {setIsSignupButtonHovered(true)}}
                        onMouseLeave={() => {setIsSignupButtonHovered(false)}}
                        style={{
                            backgroundColor: isSignupButtonHovered ? "white" : "black",
                            color: isSignupButtonHovered ? "black" : "white",
                            // border: isSignupButtonHovered ? "none" : "2px solid black"
                        }}
                >
                    Sign Up
                </button>
            </form>        
        </div>
    )
};

export default LoginForm;