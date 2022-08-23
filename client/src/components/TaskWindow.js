import { useState, useEffect } from 'react';

import TaskItem from './TaskItem';

function TaskWindow({ loggedInUserId }) {
    const [loggedInUsersTasks, setLoggedInUsersTasks] = useState([]);
    // console.log('logged in user\'s tasks:', loggedInUsersTasks)  
    const [isTaskListLoaded, setIsTaskListLoaded] = useState(true);

    let tasks = loggedInUsersTasks.map((e) => {
        return e.task;
    })
    // console.log('mapped tasks: ', tasks)

    const renderTasks = async () => {
        try {
            let req = await fetch('/tasks')
            let res = await req.json();

            const filteredTasks = res.filter((t) => {
                return t.user_id === loggedInUserId
            })
            
            if(!req.status.ok) setIsTaskListLoaded(false);
            setLoggedInUsersTasks(filteredTasks);
            // console.log(filteredTasks)
        } catch (error) {
            console.log('Error in TaskWindow')
        }
    }
    useEffect(() => {renderTasks()}, [loggedInUsersTasks])
    
    return (
        <div className="taskwindow">
            {tasks.map((e) => {
                return <TaskItem key={e.id} tasks={e} isTaskListLoaded={isTaskListLoaded}/>
            })}
        </div>
    )
}

export default TaskWindow;