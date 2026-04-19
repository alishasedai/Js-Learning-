import React from 'react'
import { useState, useEffect } from 'react'
const First = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title =`Count : ${count}`
        console.log("Component Rerendering...");
    })
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => {
        setCount(count + 1)
      }}>Count </button>
    </div>
  )
}

export default First
