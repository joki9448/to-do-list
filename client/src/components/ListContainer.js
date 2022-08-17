import React, { useState } from 'react';

import ListItem from './ListItem';

function ListContainer() {
    // const [listItems, setListitems] = useState([]);

    return (
        <div className="list-container">
            <ListItem />
        </div>
    )
}

export default ListContainer;