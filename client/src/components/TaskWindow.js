import { useState, useEffect } from 'react';

import TaskItem from './TaskItem';

function TaskWindow({ loggedInUserId }) {
    const [loggedInUsersTasks, setLoggedInUsersTasks] = useState([]);
    console.log('logged in user\'s tasks:', loggedInUsersTasks)  

    let tasks = loggedInUsersTasks.map((e) => {
        return e.task;
    })
    console.log('mapped tasks: ', tasks)

    const renderTasks = async () => {
        try {
            let req = await fetch('/tasks')
            let res = await req.json();

            const filteredTasks = res.filter((t) => {
                return t.user_id === loggedInUserId
            })
            setLoggedInUsersTasks(filteredTasks)
            // console.log(filteredTasks)
        } catch (error) {
            alert(error.messages)
        }
    }
    useEffect(() => {renderTasks()}, [])
    
    return (
        <div className="taskwindow">
            {tasks.map((e) => {
                return <TaskItem key={e.id} tasks={e}/>
            })}
        </div>
    )
}

export default TaskWindow;