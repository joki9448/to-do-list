import { useState } from 'react';

function TaskItem({ tasks, handleRefresh }) {
    console.log('tasks', tasks)
    const [isTaskHovered, setIsTaskHovered] = useState(false);
    // console.log('tasks after being mapped into individual components', tasks)
    // console.log(task)

    const handleDelete = async (t) => {
        try {
            let req = await fetch(`/tasks/${t.id}`, {
                method: "DELETE"
            })
            if (req.ok) handleRefresh();
        } catch(error) {
            console.log(error.message)
        }
    }

    return (
        <div className="task-items-container" 
                onMouseEnter={() => setIsTaskHovered(true)}
                onMouseLeave={() => setIsTaskHovered(false)}
        >       
            <div className="task-text" 
            >{tasks.task} {tasks.created_at}
            </div>
            <button className="task-delete-btn" 
                    onClick={() => {handleDelete(tasks)}}
                    style={{
                        visibility: isTaskHovered ? "visible" : "hidden"
                    }}
            >x
            </button>
        </div>
    )
}

export default TaskItem;