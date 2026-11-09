import React,{useContext} from 'react'
import {UsersContext} from "../context/UsersContext"

const Login = () => {
    const {handleLogin,loginUser,
          handleLoginChange} = useContext(UsersContext)
  return (
    <div>
      login
      <form action="" onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          value={loginUser.email}
          onChange={handleLoginChange}
        />
        <br />

        <input
          type="text"
          name="password"
          value={loginUser.password}
          onChange={handleLoginChange}
        />
        <br />

        <button value="submit">Login</button>
      </form>
    </div>
  );
}

export default Login
