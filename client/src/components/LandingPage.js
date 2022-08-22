import { useState } from 'react';

import TaskWindow from './TaskWindow';
import CreateTask from './CreateTask';

function LandingPage({ onLogout, loggedInUser, fetchUser }) {
    const [isCreateFormVisible, setIsCreateFormVisible] = useState('');

    const handleLogout = async () => {
        let req = await fetch('/logout', {
            method: "DELETE"
        })
        onLogout(null);
    }
    return (
        <div className="list-container">
            <h1>Hello, {loggedInUser} !</h1>
            <h2>To Do: </h2>
            <button className="create-btn" onClick={() => {
                setIsCreateFormVisible(true);
            }}>
                New
            </button>
            <button className="logout-btn" onClick={() => handleLogout()}>Log Out</button>
            <TaskWindow />
            {isCreateFormVisible ? <CreateTask setIsCreateFormVisible={setIsCreateFormVisible}/> : null}
        </div>
    )
}

export default LandingPage;