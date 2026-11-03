import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'
import { useNavigate } from 'react-router-dom';


const AllStudent = () => {
    const navigate = useNavigate();

    const {students,handleDelete} = useContext(StudentContext)
  return (
    <div>
      <h2>All Student List at here...</h2>
      {students.map((s) => {
        return <div key={s._id} >
            <p>Name : {s.name}</p>
            <p>Email : {s.email}</p>
            <p>Address : {s.address}</p>
            <button>Edit</button>
            <button onClick={() => handleDelete(s._id)}>Delete</button>
            <hr />
        </div>
      })}
      <button onClick={() => navigate("/")}>Create student</button>
    </div>
  )
}

export default AllStudent
