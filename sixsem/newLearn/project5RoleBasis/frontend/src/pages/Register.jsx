import React,{useContext} from 'react'
import {UserContext} from "../context/UserContext"

const Register = () => {
    const {student,data,handleChange,handleCreate} = useContext(UserContext)

  return (
    <div>
      <h2>Create User</h2>
      <form action="" onSubmit={handleCreate}>
        <input
          placeholder="enter your name"
          type="text"
          name="std_name"
          value={student.std_name}
          onChange={handleChange}
        />
        <br />

        <input
          placeholder="enter your email"
          type="text"
          name="std_email"
          value={student.std_email}
          onChange={handleChange}
        />
        <br />

        <input
          placeholder="enter your password"
          type="text"
          name="std_password"
          value={student.std_password}
          onChange={handleChange}
        />
        <br />

        <input
          placeholder="enter your gender"
          type="text"
          name="std_gender"
          value={student.std_gender}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Register
