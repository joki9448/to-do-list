import { useState } from 'react';

function TaskItem({ tasks, handleRefresh }) {
    const [isTaskHovered, setIsTaskHovered] = useState(false);
    
    let date;
    let time;
    const handleDate = () => {
        let date = tasks.created_at;
        let newDate = new Date(date)
        return newDate.toLocaleDateString() + ' ' + newDate.toLocaleTimeString();
    }
    const handleTime = () => {
        let createdAt = tasks.created_at
        let noYear = createdAt.slice(10)

    }

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
            <div className="task-text">{tasks.task}</div>
            <div className="created-at-text">{handleDate()}</div>
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