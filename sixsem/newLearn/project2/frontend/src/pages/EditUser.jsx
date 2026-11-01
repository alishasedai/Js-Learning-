import React from 'react'
import { useContext ,useEffect} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import { UserContext } from '../context/UserContext'

const EditUser = () => {
  const {id} = useParams();
  console.log("iddd : ",id);
  
    const { handleUpdateChange,setUpdateData, user, updateData, handleUpdate } =
      useContext(UserContext);
      console.log("Update data that is from the frontend: ",updateData);
      useEffect(() => {
        const fetchUsers = async() => {
          try {
            const response = await axios.get(`http://localhost:3000/getUser/${id}`);
            console.log("getsssss : ",response);
            setUpdateData(response.data.findUser)
            
          } catch (error) {
            console.log("error : ",error.message);
            
          }
        }
        fetchUsers();
        
      }, [id])
      
  return (
    <div>
      <form action="" onSubmit={(e) => handleUpdate(e, id)}>
        <input
          type="text"
          name="name"
          value={updateData.name || ""}
          onChange={handleUpdateChange}
          id=""
        />{" "}
        <br />
        <input
          type="text"
          name="email"
          value={updateData.email || ""}
          onChange={handleUpdateChange}
          id=""
        />{" "}
        <br />
        <input
          type="text"
          name="address"
          value={updateData.address || ""}
          onChange={handleUpdateChange}
          id=""
        />{" "}
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditUser
