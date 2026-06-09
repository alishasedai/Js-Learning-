
import React, { useEffect, useState } from 'react'

const SearchStudent = () => {
  const students = ["Ram", "Sita","Shree Hari", "Vishnu", "Laxmi", "Jagdamba","Gauri"]
  const [search,setSearch] = useState("");
  const [late,setLate] = useState("")
  const filterSearch = students.filter((student) => 
    student.toLowerCase().includes(late.toLowerCase())
  )
  useEffect(() => {
    const timer = setTimeout(() => {
        setLate(search);
    },2000)
    return () => clearTimeout(timer);
    console.log("work")
  },[search])
  
  return (
      <div>
    <input type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)} />
  <div>
    <ul>
      {filterSearch.map((val,i) => {
     return <li key={i}>{val}</li>
      })}
    </ul>
  </div>
    </div>
  )
}

export default SearchStudent
