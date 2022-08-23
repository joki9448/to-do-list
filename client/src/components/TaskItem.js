function TaskItem({ tasks, isTaskListLoaded }) {
    // console.log('tasks after being mapped into individual components', tasks)
    return (
        <div className="task-items-container" style={{
            
        }}>
            {tasks}
        </div>
    )
}

export default TaskItem;