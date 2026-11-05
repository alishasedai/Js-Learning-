import React ,{useContext} from 'react'
import {UserContext} from "../context/UserContext"


const Login = () => {
    const { loginData, handleLoginChange, handleLogin } = useContext(UserContext);
  return (
    <div>
      login
      <form action="" onSubmit={handleLogin}>
        <input
          type="text"
          name="std_email"
          value={loginData.std_email}
          onChange={handleLoginChange}
        />{" "}
        <br />
        <input
          type="text"
          value={loginData.std_password}
          onChange={handleLoginChange}
          name="std_password"
        />{" "}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login
