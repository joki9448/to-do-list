import './App.css';
import { useEffect, useState } from 'react';

import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Orbs from './components/Orbs';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(0);
  const [isSignUpFormVisible, handleIsSignUpFormVisible] = useState(false);

  const fetchUser = async () => {
    try {
      let req = await fetch('/me');
      if (req.ok) {
        let res = await req.json();
        // console.log('res from app.js', res)
        setLoggedInUser(res.username)
        setLoggedInUserId(res.id)
      }
    } catch (error) {
      alert(error.messages)
    }
  }
  useEffect(() => fetchUser, [])
  
  if (loggedInUser) {
    return <LandingPage 
      onLogout={setLoggedInUser} 
      loggedInUsername={loggedInUser} 
      loggedInUserId={loggedInUserId}

      />
  } else {
    return (
      <>
        <Orbs />
        <LoginForm 
        onLogin={setLoggedInUser}       
        handleIsSignUpFormVisible={handleIsSignUpFormVisible}
        />
        <SignUpForm handleIsSignUpFormVisible={handleIsSignUpFormVisible} isSignUpFormVisible={isSignUpFormVisible}/>
      </>
    )
  }
  
}


export default App;
