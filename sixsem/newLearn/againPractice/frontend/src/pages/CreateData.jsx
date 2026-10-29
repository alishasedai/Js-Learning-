import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { UserContext } from '../context/UserContext';

 
const CreateData = () => {
   const {user,setUser,users,setUsers,handleChange,handleSubmit} = useContext(UserContext)
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text"
            name='name'
            value={user.name}
            onChange={handleChange} />
            <br />
              <input type="text"
            name='email'
            value={user.email}
            onChange={handleChange} /> <br />
              <input type="text"
            name='address'
            value={user.address}
            onChange={handleChange} /> <br />
            <button type='submit'>Submit</button>
        </form>
        {/* <p>why not wokring huhuhu</p> */}
    </div>
  )
}

export default CreateData
