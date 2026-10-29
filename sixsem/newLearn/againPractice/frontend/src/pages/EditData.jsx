import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const EditData = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <form action="">
            <input type="text" 
            value={user.name} />
        </form>
    </div>
  )
}

export default EditData
