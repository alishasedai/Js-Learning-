import React, { useState } from 'react'

const MultiInputForm = () => {
    const [formData,setFormData] = useState({
        name : "",
        email : "",
        age: "",

    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name] : value

        }))

    }
  return (
   <form action="" onSubmit={handleSubmit}>
    <h2>MultiInputForm Example</h2>
    <label htmlFor="">Name: </label>
    <input
     type="text"
      name="name" 
      id="" 
      placeholder='name'
      value={formData.name}
      onChange={handleChange}/>

    <label htmlFor="">Email: </label>
    <input type="text" name="email" id="" placeholder='email'
     value={formData.email}
      onChange={handleChange}/>

    <label htmlFor="">Age: </label>
    <input type="number" name="age" id="" placeholder='age'
     value={formData.age}
      onChange={handleChange}
    />
    <button type='submit'>Submit</button>
   </form>
  )
}

export default MultiInputForm
