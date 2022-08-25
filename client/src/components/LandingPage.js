import { useState, useEffect } from 'react';

import TaskWindow from './TaskWindow';
import CreateTask from './CreateTask';

function LandingPage({ onLogout, loggedInUsername, loggedInUserId }) {
    const [loggedInUsersTasks, setLoggedInUsersTasks] = useState([]);
    const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);
    
    const renderTasks = async () => {
        try {
            let req = await fetch('/tasks')
            let res = await req.json();
            const filteredTasks = res.filter((t) => {
                return t.user_id === loggedInUserId
            })
            
            setLoggedInUsersTasks(filteredTasks);
            // console.log(filteredTasks)
        } catch (error) {
            console.log('Error in TaskWindow')
        }
    }
    useEffect(() => {renderTasks()}, [loggedInUserId])

    const handleRefresh = () => {
        window.location.reload();
    }

    const handleLogout = async () => {
        let req = await fetch('/logout', {
            method: "DELETE"
        })
        onLogout(null);
    }
    return (
        <div className="list-container">
            <h1>Hello, {loggedInUsername} !</h1>
            <h2>To Do: </h2>
            <button className="create-btn" onClick={() => {
                setIsCreateFormVisible(true);
            }}>
                New
            </button>
            <button className="logout-btn" onClick={() => handleLogout()}>Log Out</button>
            <TaskWindow 
                loggedInUserId={loggedInUserId} 
                loggedInUsersTasks={loggedInUsersTasks} 
                handleRefresh={handleRefresh}
            />
            <CreateTask 
                setIsCreateFormVisible={setIsCreateFormVisible} 
                isCreateFormVisible={isCreateFormVisible}
                loggedInUserId={loggedInUserId} 
                handleRefresh={handleRefresh}
            />
        </div>
    )
}

export default LandingPage;