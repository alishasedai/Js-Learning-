import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const AllNotes = () => {
  const navigate = useNavigate();
  const[users,setUsers] = useState([]);
  const[update,setUpdate] =useState({});

    async function getUsers () {
     try {
      const response = await axios.get("http://localhost:3000");
       console.log("Users data fetched successfully",response.data.user);
       setUsers(response.data.user)
       
     } catch (error) {
      console.log("Error : ",error.message);
      
     }

 }
 useEffect(() => {
  getUsers();
 },[])
   useEffect(() => {
    console.log("Updated users state:", users);
  }, [users]);

  const handleDelete = async(index) => {
    console.log("Deleted id is : ",index);
    const deletes = await axios.delete(`http://localhost:3000/handleDelete/${index}`);
    console.log("deleted successfully... hehe");
    getUsers()
    

  }
  return (
    <div>
      {users.map((data,id) => {
        return <div key={id}>
          <p>Name : {data.name}</p>
          <p>Address : {data.address}</p>
          <button onClick={() => navigate("/updateUser",
            {
              state : {user : data}
            }
          ) }>Update</button>
          <button onClick={() => handleDelete(data._id)}>Delete</button>
          <br />
        </div>


      })}
      <button onClick={() => navigate("/")}>Go back</button>
    </div>
  )
}

export default AllNotes
