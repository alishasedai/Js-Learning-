import React, { useState } from 'react'

const ToggleMessage = () => {
    const [toggle,setToggle] = useState("Hello");
    const handleToggle = () => {
        setToggle((prev) => (prev === "Hello" ? "Bye" : "Hello"));
        
    }
  return (
    <div>
       <button onClick={handleToggle}>{toggle}</button>
    </div>
  )
}

export default ToggleMessage
