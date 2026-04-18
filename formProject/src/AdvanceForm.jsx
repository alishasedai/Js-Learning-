import React from 'react'
import { useState } from 'react'

const AdvanceForm = () => {
const [formData,setFormData] = useState({
    gender :"",
    agree: false,
    country: "India"
})
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
}
const handleData = (e) => {
    const {name,type,checked,value} = e.target
    setFormData((prev) => ({
        ...prev,
        [name] : type === "checkbox" ? checked : value

    }))
}
  return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Gender  : </label>
        <label htmlFor="">Male</label>
        <input type="radio" onChange={handleData}
            checked = {formData.gender === "male"}
        name='gender' value="male"/>
        <label htmlFor="">Female</label>
        <input type="radio" onChange={handleData}
          checked = {formData.gender === "female"}
        name='gender'
        value="female"
        />
        <br />
        <label htmlFor="">Country: 
            <select name="country" id="" onChange={handleData}
                value={formData.country}>
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
                <option value="USA">USA</option>
            </select>
        </label>
    <br />
        <label htmlFor="">
            <input 
              type="checkbox" 
              name="agree" 
              onChange={handleData}

              checked = {formData.agree} 
            />I agree to terms and conditions..
        </label>
        <br />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default AdvanceForm
