function TaskItem({ tasks, isTaskListLoaded }) {
    // console.log('tasks after being mapped into individual components', tasks)
    // console.log(task)

    const handleDelete = async (t) => {
        try {
            let req = await fetch(`/tasks/${t.id}`, {
                method: "DELETE"
            })
        } catch(error) {
            console.log(error.message)
        }
    }

    return (
        <div className="task-items-container">
            {tasks.task}
            <button className="task-delete-btn" onClick={() => {handleDelete(tasks)}}>x</button>
        </div>
    )
}

export default TaskItem;