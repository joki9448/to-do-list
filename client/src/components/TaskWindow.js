import { useState, useEffect } from 'react';

import TaskItem from './TaskItem';

function TaskWindow({ loggedInUsersTasks }) {
    // console.log('loggedinuserid: ', loggedInUserId)
    // const [loggedInUsersTasks, setLoggedInUsersTasks] = useState([]);
    // console.log('logged in user\'s tasks:', loggedInUsersTasks)  
    
    // console.log('mapped tasks: ', tasks)

    // const renderTasks = async () => {
    //     try {
    //         let req = await fetch('/tasks')
    //         let res = await req.json();
    //         const filteredTasks = res.filter((t) => {
    //             return t.user_id === loggedInUserId
    //         })
            
    //         setLoggedInUsersTasks(filteredTasks);
    //         // console.log(filteredTasks)
    //     } catch (error) {
    //         console.log('Error in TaskWindow')
    //     }
    // }
    // useEffect(() => {renderTasks()}, [])
    
    return (
        <div className="taskwindow">
            {loggedInUsersTasks.map((t) => {
                return <TaskItem key={t.id} tasks={t} />
            })}
        </div>
    )
}

export default TaskWindow;