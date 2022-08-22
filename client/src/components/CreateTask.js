function CreateTask() {
    return (
        <form className="create-task-form">
            <input type="text" className="create-task-input"></input>
            <button type="submit">Pin New Task</button>
        </form>
    )
}

export default CreateTask;