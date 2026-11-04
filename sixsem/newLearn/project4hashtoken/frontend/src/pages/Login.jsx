import React, { useEffect, useContext } from "react";
import {EmployeeContext} from "../context/EmployeeContext"

const Login = () => {
    const {handleLogin,emp_login,handleChangeLogin} = useContext(EmployeeContext)
    useEffect(() => {
        console.log("Emp login data : ",emp_login);
        
    },[emp_login])
  return (
    <div>
      Login here...
      <form action="" onSubmit={handleLogin}>
        <input
          type="text"
          name="emp_email"
          value={emp_login.emp_email}
          onChange={handleChangeLogin}
        />{" "}
        <br />
        <input
          type="text"
          name="emp_password"
          value={emp_login.emp_password}
          onChange={handleChangeLogin}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login
