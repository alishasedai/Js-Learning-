import React, { useContext, useEffect } from 'react'
import { StudentContext } from '../context/StudentContext'
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const navigate = useNavigate();

    const {handleChange,student,students,handleSubmit} = useContext(StudentContext)
    useEffect(
        () => {
            console.log("students ===> ",students);  
        }
    ,[])
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={handleChange}
          name="name"
          value={student.name}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="enter your email"
          onChange={handleChange}
          name="email"
          value={student.email}
        />
        <br />
        <input
          type="text"
          placeholder="enter your password"
          onChange={handleChange}
          name="password"
          value={student.password}
        />
        <br />
        <input
          type="text"
          placeholder="enter your addres"
          onChange={handleChange}
          name="address"
          value={student.address}
        />
        <br />
        <button type="submit">Create</button>
      </form>
      <hr />
      <button onClick={() => navigate("/allStudent")}>Show All student</button>
    </div>
  );
}

export default CreateStudent
