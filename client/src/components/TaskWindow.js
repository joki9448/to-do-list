import { useState, useEffect } from 'react';

import ListItem from './ListItem';

function TaskWindow({ loggedInUserId }) {
    const [loggedInUsersTasks, setLoggedInUsersTasks] = useState('')
    
    const renderTasks = async () => {
        try {
            let req = await fetch('/tasks')
            let res = await req.json();
            res.map((t) => {
                if (t.user_id === loggedInUserId) {
                    console.log('map t', t)
                    // setLoggedInUsersTasks(t.task);
                }
            })
            console.log('tasks res', res)
        } catch (error) {
            alert(error.messages)
        }
    }
    useEffect(() => {renderTasks()}, [])
    
    return (
        <div className="taskwindow">
            {loggedInUsersTasks}
        </div>
    )
}

export default TaskWindow;