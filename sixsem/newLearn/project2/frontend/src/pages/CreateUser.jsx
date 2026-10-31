import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const CreateUser = () => {
    const {user,handleSubmit,handleChange} = useContext(UserContext)
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" 
            name='name'
            placeholder='enter your name'
            value={user.name}
            onChange={handleChange}/>
            <br />
            <input type="text" 
            name='email'
            value={user.email}
            placeholder='enter your email'
            onChange={handleChange}/>
            <br />
            <input type="text" 
            name='address'
            value={user.address}
            placeholder='enter your address'
            onChange={handleChange}/>
            <br />
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default CreateUser
