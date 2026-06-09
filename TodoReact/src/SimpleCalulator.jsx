import React, { useState } from 'react'

const SimpleCalulator = () => {
  const buttons = [
    "7","8","9","+",
    "4","5", "6", "-",
    "1","2","3","*",
    "0", "=", "C", "/"
  ]
  const [values,setValues] = useState("");
  const handleClick = (data) => {
    
    if(data === "C"){
      setValues("");
    }
    else if(data === "="){
      setValues(eval(values).toString());
    }
    else{
      setValues((prev) => prev+data)
    }
};
  return (
    <div>
      {buttons.map((val,i) => {
        return <button key={i} onClick={() => handleClick(val)} >{val}</button>
      })}
      {/* <input type="text" readOnly value={values} /> */}
      {values && <p>{values}</p>}
      
    </div>
  )
}

export default SimpleCalulator

