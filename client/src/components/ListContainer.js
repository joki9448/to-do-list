import React, { useState } from 'react';
import ListItem from './ListItem';
import Form from './Form';

function ListContainer() {
    // const [listItems, setListitems] = useState([]);

    return (
        <div className="list-container">
            <Form />
            <ListItem />
        </div>
    )
}

export default ListContainer;