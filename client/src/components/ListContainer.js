import React, { useEffect, useState } from 'react';

import ListItem from './ListItem';

function ListContainer({ onLogout, loggedInUser, fetchUser }) {
    const [tasks, setTasks] = useState([]);

    const handleLogout = async () => {
        let req = await fetch('/logout', {
            method: "DELETE"
        })
        onLogout(null);
    }
    return (
        <div className="list-container">
            <h1>Hello, {loggedInUser} !</h1>
            <h2>To Do: </h2>
            <button className="logout-btn" onClick={() => handleLogout()}>Log Out</button>
        </div>
    )
}

export default ListContainer;