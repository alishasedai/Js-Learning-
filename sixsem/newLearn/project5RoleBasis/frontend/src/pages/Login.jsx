import React ,{useContext} from 'react'
import {UserContext} from "../context/UserContext"


const Login = () => {
    const {student,handleChange,handleLogin} = useContext(UserContext)
  return (
    <div>
      login
      <form action="" onSubmit={handleLogin}>
        <input type="text" 
        name="std_email"
        value={student.std_email}
        onChange={handleChange}
        /> <br />

        <input type="text"
        value={student.std_password}
        onChange={handleChange}
        name="std_password" /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
