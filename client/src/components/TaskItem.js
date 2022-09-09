import { useState } from 'react';

function TaskItem({ tasks, handleRefresh }) {
    const [isTaskHovered, setIsTaskHovered] = useState(false);
    
    const handleDateAndTime = () => {
        let date = tasks.created_at;
        let newDate = new Date(date)
        return newDate.toLocaleDateString() + ' ' + newDate.toLocaleTimeString();
    }

    const handleDelete = async (t) => {
        try {
            let req = await fetch(`/tasks/${t.id}`, {
                method: "DELETE"
            })
            // if (req.ok) handleRefresh();
        } catch(error) {
            console.log(error.message)
        }
    }

    return (
        <div className="task-items-container" 
                onMouseEnter={() => setIsTaskHovered(true)}
                onMouseLeave={() => setIsTaskHovered(false)}
        >       
            {/* <div className="dot">●</div> */}
            <div className="task-text">{tasks.task}</div>
            <div className="created-at-text">{handleDateAndTime()}</div>
            {/* <input type="checkbox" className="checkbox"></input> */}
            <button className="task-delete-btn" 
                    onClick={() => {handleDelete(tasks)}}
                    style={{
                        visibility: isTaskHovered ? "visible" : "hidden",
                        color: 'white',
                        fontSize: '50px',
                        opacity: isTaskHovered ? "1" : "0.2",
                        transition: "all 0.18s ease-in-out"
            
                    }}
            >x
            </button>
        </div>
    )
}

export default TaskItem;