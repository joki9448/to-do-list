import { useState } from 'react';

function SignUpForm({ handleIsSignUpFormVisible, isSignUpFormVisible }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let req = await fetch('/users', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                    "password_confirmation": passwordConfirmation
                })
            })
            let res = await req.json();
            // setUsername(res.username);
            // setPassword(res.password_digest);
        } catch (error) {
            alert(error.messages)
        }
    }

    return (
        <div className="signup-modal" style={{ display: isSignUpFormVisible ? "flex" : "none" }}>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} 
                    placeholder="Create username"
                />
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} 
                    placeholder="Create password"
                />
                <input 
                    type="password" 
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    value={passwordConfirmation} 
                    placeholder="Confirm password"
                />
                <button className="login-btn" type="submit">Create Account</button>
            </form>        
            <div className="close-signup-form" onClick={() => {handleIsSignUpFormVisible(false)}}>X</div>
        </div>
    )
}

export default SignUpForm;