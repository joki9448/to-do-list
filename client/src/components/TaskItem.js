function TaskItem({ tasks }) {
    // console.log('tasks after being mapped into individual components', tasks)
    return (
        <div className="task-items-container">
            {tasks}
        </div>
    )
}

export default TaskItem;