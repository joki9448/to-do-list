import React, { useEffect, useState } from 'react';

import ListItem from './ListItem';

function ListContainer({ onLogout, loggedInUser, fetchUser }) {
    // const [listItems, setListitems] = useState([]);
    useEffect(() => fetchUser, [])

    const handleLogout = async () => {
        let req = await fetch('/logout', {
            method: "DELETE"
        })
        onLogout(null);
    }
    return (
        <div className="list-container">
            <ListItem />
            <button className="logout-btn" onClick={() => handleLogout()}>Log Out</button>
        </div>
    )
}

export default ListContainer;