import { useState } from 'react';

function CreateTask({ setIsCreateFormVisible, loggedInUserId }) {
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
            console.log('create task res', res)
        } catch (error) {
            alert(error.messages)
        }
    }

    return (
        <div className="create-task-modal">
            <form className="create-task-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="create-task-input"
                    value={task}
                    onChange={(e) => {
                        setTask(e.target.value)
                    }}
                ></input>
                <button type="submit">Pin New Task</button>
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