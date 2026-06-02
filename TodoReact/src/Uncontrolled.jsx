import React, { useRef } from 'react'

const Uncontrolled = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name :"+nameRef.current.value );
        console.log("Email : "+emailRef.current.value)
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name:
            <input type="text" ref={nameRef} name="" id="" />
        </label>
        <label htmlFor="">Email:
            <input type="email" ref={emailRef} name="" id="" />
        </label>
        <button type='submit'>Submit</button>

      </form>

    </div>
  )
}

export default Uncontrolled
