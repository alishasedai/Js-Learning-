import React, { useEffect, useState } from 'react'

const PracticeEffect = () => {
    const [color,setColor]= useState("white");
    useEffect(() => {
     
        document.body.style.backgroundColor = color
    },[color])
  return (
    <div>
      <h2 >Change Background Color</h2>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("green")}>Green</button>

    </div>
  )
}

export default PracticeEffect
