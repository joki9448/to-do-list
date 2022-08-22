import TaskList from './TaskList';

function ListContainer({ onLogout, loggedInUser, fetchUser }) {

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
            <button className="create-btn">New</button>
            <button className="logout-btn" onClick={() => handleLogout()}>Log Out</button>
            <TaskList />
        </div>
    )
}

export default ListContainer;