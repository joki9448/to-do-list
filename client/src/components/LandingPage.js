import { useState } from 'react';

import TaskWindow from './TaskWindow';
import CreateTask from './CreateTask';

function LandingPage({ onLogout, loggedInUser, loggedInUserId }) {
    const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);

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
            <TaskWindow loggedInUserId={loggedInUserId}/>
            <CreateTask 
                setIsCreateFormVisible={setIsCreateFormVisible} 
                isCreateFormVisible={isCreateFormVisible}
                loggedInUserId={loggedInUserId} 
            />
            {/* {isCreateFormVisible ? 
                <CreateTask 
                    setIsCreateFormVisible={setIsCreateFormVisible} 
                    loggedInUserId={loggedInUserId}
                /> 
                : null
            } */}
        </div>
    )
}

export default LandingPage;