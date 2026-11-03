import React,{useContext,useEffect} from 'react'
import { StudentContext } from '../context/StudentContext'
import {useParams} from "react-router-dom"

const UpdateStudent = () => {
    
    const {
      updateStudent,
      handleChange,
      handleUpdate,
      updateHandleChange,
      fetchSingleStudent,
    } = useContext(StudentContext);
      const {id} = useParams()
      console.log("Id;;;",id);
      
      useEffect(() => {
        fetchSingleStudent(id)
      },[id])
  return (
    <div>
      Update Student
      <form action="" onSubmit={(e) => handleUpdate(e,updateStudent._id)}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={updateHandleChange}
          name="name"
          value={updateStudent.name}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="enter your email"
          onChange={updateHandleChange}
          name="email"
          value={updateStudent.email}
        />
        <br />
        <input
          type="text"
          placeholder="enter your password"
          onChange={updateHandleChange}
          name="password"
          value={updateStudent.password}
        />
        <br />
        <input
          type="text"
          placeholder="enter your addres"
          onChange={updateHandleChange}
          name="address"
          value={updateStudent.address}
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateStudent
