import React from 'react'
import { useState } from 'react'

const ToggleText = () => {
    const [toggle,setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => {
        setToggle(!toggle)
      }}>{toggle ? "Hide" : "Show"} Text</button>

      {toggle && <p>This is secret message...!!!</p>}
    </div>
  )
}

export default ToggleText
