import React, { useState } from 'react'

const MultiForm = () => {
    const [formData,setFormData] = useState({
        name : "",
        age : "",
        email : "",
        address : ""
    })
    const handleChange = (e) => {
        const {name,value} = e.target
        
        setFormData ((prev) => ({
            ...prev,
            [name] : value

        }))
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(formData)
        
    }
  return (
    <div>
      <form action="" onSubmit={ handleSumbit}>
        <label htmlFor="">Name:</label>
        <input 
        type="text" 
        name="name"
         id="" 
         value={formData.name}
         onChange={handleChange}/>

        <label htmlFor="">Age:</label>
        <input type="text" name="age" id=""
        value={formData.age}
         onChange={handleChange} />

        <label htmlFor="">Email:</label>
        <input type="email" name="email" id="" 
        value={formData.email}
         onChange={handleChange}/>

        <label htmlFor="">Address:</label>
        <input type="text" name="address" id=""
        value={formData.address}
         onChange={handleChange} />

        <button type='submit'>Sumbit</button>
      </form>
    </div>
  )
}

export default MultiForm
