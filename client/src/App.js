import './App.css';
import { useState } from 'react';

import ListContainer from './components/ListContainer';
import LoginForm from './components/LoginForm';

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <div className="App">
        <ListContainer />
        <LoginForm setUser={setLoggedInUser}/>
    </div>
  );
}

export default App;
