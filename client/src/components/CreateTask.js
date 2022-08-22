import { useState } from 'react';

function CreateTask({ setIsCreateFormVisible, loggedInUserId }) {
    const [task, setTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let req = await fetch('/tasks', {
                method: "POST",
                header: {"Content-Type": "application/json"},
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
        <div className="create-task-modal" onSubmit={handleSubmit}>
            <form className="create-task-form">
                <input type="text" className="create-task-input"></input>
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