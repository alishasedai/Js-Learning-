import React from 'react'
import { useState } from 'react'

const Student = () => {
    const [student,setStudent] = useState({
        Name : "Alisha",
        Grade : "A",
        City : "Kathmandu"
    })
    const changeCity = () => {
        setStudent({...student,City:"Jhapa"})
    }
  return (
    <div>
      <h2>Name : {student.Name}</h2>
      <h3>Grade : {student.Grade}</h3>
      <p>City : {student.City}</p>

      <button onClick={changeCity}>Change City</button>
    </div>
  )
}

export default Student
