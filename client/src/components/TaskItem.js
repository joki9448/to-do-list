import { useState } from 'react';

function TaskItem({ tasks, handleRefresh }) {
    const [isTaskHovered, setIsTaskHovered] = useState(false);
    

    let date;
    let time;
    const handleDate = () => {
        let createdAt = tasks.created_at
        let noTime = createdAt.slice(0, 10)
        let slicedYear = noTime.slice(0, 4)
        let firstDash = createdAt.charAt(4)
        let finalDate = noTime.replace(slicedYear, '').replace(firstDash, '') + '-' + slicedYear
        return finalDate
    }
    const handleTime = () => {
        let createdAt = tasks.created_at
        let newTime = createdAt.slice(10)
        return time = newTime;
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
            <div className="task-text" 
            >
                {tasks.task} {handleDate()} {handleTime()}
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