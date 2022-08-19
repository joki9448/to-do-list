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
            });
            if (req.status === 201) {
                alert('Account created!');
                handleIsSignUpFormVisible(false);
            } else if (req.status === 422) {
                alert('Please enter a username and password, then confirm your password!');
            }
            let res = await req.json();
        } catch (error) {
            alert(error.messages)
        }
    };

    return (
        <div className="signup-modal" style={{ 
                visibility: isSignUpFormVisible ? "visible" : "hidden",
                opacity: isSignUpFormVisible ? "1" : "0.2",
                transition: "all 0.165s",
            }}
        >
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1 className="signup-header">SIGN UP</h1>
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
                <button className="signup-modal-btn" type="submit">Create Account</button>
            </form>        
            <div className="close-signup-form" onClick={() => {handleIsSignUpFormVisible(false)}}>X</div>
        </div>
    )
}

export default SignUpForm;