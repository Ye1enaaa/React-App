import React, {useEffect, useState} from "react";
const Dashboard = () =>{
    const [users, setUsers ] = useState([]);
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        setUsers(jsonData);
    }

    if(users.length == 0){
        return <div>Loading....</div>
    }

    return (
        <div>
            <h1>User List:</h1>
            <ul>
                {users.map((user)=>(
                    <li key= {user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;