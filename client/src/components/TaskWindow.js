import { useState, useEffect } from 'react';

import TaskItem from './TaskItem';

function TaskWindow({ loggedInUsersTasks, handleRefresh }) {
    
    return (
        <div className="taskwindow">
            {loggedInUsersTasks.map((t) => {
                return <TaskItem key={t.id} tasks={t} handleRefresh={handleRefresh}/>
            })}
        </div>
    )
}

export default TaskWindow;