import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const EditUser = () => {
    const {handleChange,user,updateData,handleUpdate} = useContext(UserContext)
  return (
    <div>
     <form action="" onSubmit={handleUpdate}>
        <input type="text" name="name" value={updateData.name} 
        onChange={handleChange} id="" /> <br />
        <input type="text" name="name" value={updateData.email}
        onChange={handleChange} id="" /> <br />
        <input type="text" name="name" value={updateData.address}
        onChange={handleChange} id="" /> <br />
        <button type='submit'>Update</button>
     </form>
    </div>
  )
}

export default EditUser
