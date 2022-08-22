function CreateTask({ setIsCreateFormVisible}) {
    
    return (
        <div className="create-task-container">
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