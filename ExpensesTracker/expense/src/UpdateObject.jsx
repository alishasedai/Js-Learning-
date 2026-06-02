import React, { useState } from 'react'

const UpdateObject = () => {
    const [data,setData] = useState({
        name : "",
        age : 21
    })
   const handleChange = () => {
        setData((prev) => ({...prev,name : "Alisha"}));
    }
  return (
    <div>
        <p>{data.name}</p>
      <p>{data.age}</p>
      <button onClick={handleChange}>Change</button>
      
    </div>
  )
}

export default UpdateObject
