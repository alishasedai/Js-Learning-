import React, { useContext,useState,useEffect } from 'react'
import { UserContext } from '../context/UserContext'

const EditData = () => {
    const {users,setUsers,user,setUser,getIndex,handleUpdate} = useContext(UserContext)
    const [data,setData] = useState({
      name : "",
      email : "",
      address : ""
    })
 useEffect(() => {
   const selectedUsers = users.find((item) => item._id === getIndex);
   console.log("users======> ", selectedUsers);
   console.log("Users:", users);
   console.log("getIndex:", getIndex);
   console.log("First user ID:", users[0]?._id);
   console.log("ID type:", typeof getIndex);

  if(selectedUsers){
     setData({
       name: selectedUsers.name,
       email: selectedUsers.email,
       address: selectedUsers.address,
     });
  }
   
 }, [users,getIndex])
 
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
    
    
  }
 
  return (
    <div>
      <form action="" onSubmit={(e) => {handleUpdate(e,data)}}>
        <input type="text" name="name"  value={data.name} onChange={handleChange} /> <br />
        <input type="text"  name="email" value={data.email} onChange={handleChange} /> <br />
        <input type="text" name="address"  value={data.address} onChange={handleChange} />
        <br />
        <button type="submit" >Update </button>
      </form>
    </div>
  );

}
export default EditData
