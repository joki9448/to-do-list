import './App.css';
import { useEffect, useState } from 'react';

import ListContainer from './components/ListContainer';
import LoginForm from './components/LoginForm';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

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
    return <ListContainer onLogout={setLoggedInUser} loggedInUser={loggedInUser} fetchUser={fetchUser}/>
  } else {
    return <LoginForm onLogin={setLoggedInUser}/>
  }
  
}


export default App;
