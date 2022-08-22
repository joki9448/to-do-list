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
            <div className="coverup"></div>
            <div className="coverup"></div>
            <h1 style={{marginLeft: "83%", fontSize: '50px'}}>Hello, {loggedInUser} !</h1>
            <button className="logout-btn" onClick={() => handleLogout()}>Log Out</button>
        </div>
    )
}

export default ListContainer;