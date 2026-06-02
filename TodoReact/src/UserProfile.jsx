
import React, { useState } from 'react'

const UserProfile = () => {
    const [student,setStudent] = useState({
        name : "Alisha",
        age : 22,
        city : "Kathmandu"
    })
  return (
    <div>
      <h2>Name : {student.name}</h2>
      <h2>Age : {student.age}</h2>
      <h2>City : {student.city}</h2>
    </div>
  )
}

export default UserProfile
