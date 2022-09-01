import { useState } from 'react';

function CreateTask({ setIsCreateFormVisible, isCreateFormVisible, loggedInUserId, handleRefresh }) {
    const [task, setTask] = useState('');
    // console.log('user id', loggedInUserId)
    // console.log('task', task)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let req = await fetch('/tasks', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    "task": task,
                    "user_id": loggedInUserId
                })
            })
            let res = await req.json()
            if (req.ok) {
                setIsCreateFormVisible(false);
                setTimeout(() => {
                    handleRefresh();
                }, 400)
            }
            // console.log('create task res', res)
        } catch (error) {
            alert('Error in CreateTask')
        }
    }

    return (
        <div className="create-task-modal" style={{
            visibility: isCreateFormVisible ? "visible" : "hidden",
            opacity: isCreateFormVisible ? "1" : "0.2",
            transition: "all 0.18s ease-in-out"
        }}>
            <form className="create-task-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    rows="6"
                    className="create-task-input"
                    placeholder="What to do?"
                    value={task}
                    onChange={(e) => {
                        setTask(e.target.value)
                    }}
                ></input>
                <button type="submit">Post</button>
            </form>
            <button className="close-createtask-btn" onClick={() => {
                setIsCreateFormVisible(false);
            }}>
                x
            </button>
        </div>
    )
}

export default CreateTask;