import React,{useContext} from 'react'
import {EmployeeContext} from "../context/EmployeeContext"

const Register = () => {
    const {employee,handleChange,handleRegister} = useContext(EmployeeContext)
  return (
    <div>
      Register here
      <form action="" onSubmit={handleRegister}>
        <input
          type="text"
          name="emp_name"
          value={employee.emp_name}
          onChange={handleChange}
          placeholder="enter your name"
        />{" "}
        <br />
        <input
          type="text"
          name="emp_email"
          value={employee.emp_email}
          onChange={handleChange}
          placeholder="enter your email"
        />
        <br />
        <input
          type="text"
          name="emp_password"
          value={employee.emp_password}
          onChange={handleChange}
          placeholder="enter your password"
        />
        <br />
        <input
          type="text"
          name="emp_gender"
          value={employee.emp_gender}
          onChange={handleChange}
          placeholder="enter your gender"
        />
        <br />
        <input
          type="text"
          name="emp_position"
          value={employee.emp_position}
          onChange={handleChange}
          placeholder="enter your position"
        />
        <br />
        <input
          type="text"
          name="emp_salary"
          value={employee.emp_salary}
          onChange={handleChange}
          placeholder="enter your salary"
        />
        <br />
        <input
          type="text"
          name="emp_role"
          value={employee.emp_role}
          onChange={handleChange}
          placeholder="enter your role"
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register
