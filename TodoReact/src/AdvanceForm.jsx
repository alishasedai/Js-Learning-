import React, { useState } from 'react'

const AdvanceForm = () => {
    const[formData,setFormData] = useState({
        gender : "",
        country : "",
        agree:false
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    const handlechange = (e) => {
        const {name,type,value,checked} =e.target
        setFormData((prev) => ({
            ...prev,
            [name] : type === "checkbox"? checked : value

        }))
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <h2>Form with check box, select and radio</h2>
        <label htmlFor="">
            <input type="radio" name="gender" id="" 
            value="male"
            checked={formData.gender === "male"}
            onChange={handlechange}/>Male
        </label>
        <label htmlFor="">
            <input type="radio" name="gender" id=""
            value="female"
            checked={formData.gender === "female"} 
            onChange={handlechange}/>Female
        </label>
        <br />
        <label htmlFor="">Country:
        <select name="country" id=""
        value={formData.country}
        onChange={handlechange}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
        </select>
        </label><br />
        <label htmlFor="">
            <input type="checkbox" name="agree" id="" 
            checked={formData.agree}
        onChange={handlechange}/>
            I agree to terms and conditions
        </label>
        <button type='submit'>Submit</button>

    </form>
  )
}

export default AdvanceForm
