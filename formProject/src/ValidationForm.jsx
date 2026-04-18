import React, { useState } from 'react'

function ValidationForm () {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [err,setErr] = useState("") 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email){
            setErr("Please fill all fields..");
        }else{
            setErr("");
            console.log("Form Submitted..",{name,email});
            alert("Form submitted Successfully!");
        }
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <h2>Basic Validation ...</h2>
        <input 
        type="text" 
        name="" 
        id="" 
        placeholder='Enter your name' 
        value={name}
        onChange={(e) => {
            setName(e.target.value);
        }}/><br />
        <input 
        type="email" 
        name="" 
        id="" 
        placeholder='Enter your email'
        value={email}
        onChange={(e) => {
            setEmail(e.target.value);
        }}/> <br />
        {err && <p style={{color : "red"}}>{err}</p>} 

        <button type='submit'>Submit</button>
    </form>
  )
}

export default ValidationForm
