import React, { useState } from 'react'

const ToggleText = () => {
    const [toggle,setToggle] = useState(false);
    const isToggle = () => {
        setToggle(!toggle);
        console.log(toggle);
    }
  return (
    <div>
      <button onClick={isToggle}>{toggle ? "Hide" : "Show"} text</button>

      {toggle && <p>This is secret Message</p>}
      
    </div>
  )
}

export default ToggleText
