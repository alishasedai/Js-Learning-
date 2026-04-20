import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users,setUsers] = useState([])

  useEffect(() => {
  console.log("Effect started");

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log("Response received");
      return response.json();
    })
    .then(json => {
      console.log("DATA: ho hai", json);
      setUsers(json)
    })
    .catch(error => {
      console.log("ERROR:", error);
    });

}, []);

  return (
    <div>
      <h2>Users List:</h2>
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.id} - {u.email}</li>
        ))}
          
        </ul>
    </div>
  )
}

export default Users