import './App.css';
import { useEffect, useState } from 'react';

import ListContainer from './components/ListContainer';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Orbs from './components/Orbs';
import OrbsTwo from './components/OrbsTwo';
import OrbsThree from './components/OrbsThree';
import OrbsFour from './components/OrbsFour';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isSignUpFormVisible, handleIsSignUpFormVisible] = useState(false);

  const fetchUser = async () => {
    try {
      let req = await fetch('/me');
      if (req.ok) {
        let res = await req.json();
        setLoggedInUser(res.username)
      }
    } catch (error) {
      alert(error.messages)
    }
  }
  useEffect(() => fetchUser, [])

  if (loggedInUser) {
    return <ListContainer 
      onLogout={setLoggedInUser} 
      loggedInUser={loggedInUser} 
      fetchUser={fetchUser}
      />
  } else {
    return (
      <>
        <Orbs />
        <OrbsTwo />
        <OrbsThree />
        <OrbsFour />
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
