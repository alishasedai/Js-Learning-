import React from 'react'
import { useRef } from 'react'
const UncontrolledForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name : ",nameRef.current.value);
    }

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input type="text"
        ref={nameRef}
         />
         <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default UncontrolledForm
