
import { useState, useEffect } from "react";
import React from 'react'

const Form = () => {
  const [count,setCount] = useState(0);
  const onTick = () => {
    console.log("Count : ",count)
     setCount((c) => c+1)
      
  }
  useEffect(() => {
    const id = setInterval(() => {
     onTick()
    },1000)

    
  },[])
  return (
    <div>Count : {count}
      
    </div>
  )
}

export default Form
