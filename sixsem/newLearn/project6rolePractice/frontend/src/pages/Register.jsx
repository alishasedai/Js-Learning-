import React ,{useContext,useState} from 'react'
import {UsersContext } from "../context/UsersContext"


const Register = () => {
   

    const { handleChange, registerData, handleRegister } =
      useContext(UsersContext);
  return (
    <div>
      Register
      <form action="" onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          value={registerData.name}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="email"
          value={registerData.email}
          onChange={handleChange}
        />
        <br />

        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleChange}
        />
        <br />

        <select
          name="gender"
          value={registerData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="others">Others</option>
        </select>
        <br />

        <button value="submit">Register</button>
      </form>
    </div>
  );
}

export default Register
