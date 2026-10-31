import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const UsersData = () => {
    const {users,setUser,handleEdit,handleDelete} = useContext(UserContext)
    console.log("I am working ..",users);
    
  return (
    <div>

      {users.map((val,index) => {
        return <div key={index}>
            <p>Name : {val.name}</p>
            <p>Email : {val.email}</p>
            <p>Address : {val.address}</p>
            <button onClick={() => handleEdit(val._id)}>Edit</button> &nbsp;
            <button onClick={() => handleDelete(val._id)}>Delete</button>
            <hr />
            <br />
        </div>
      })}
    </div>
  )
}

export default UsersData
