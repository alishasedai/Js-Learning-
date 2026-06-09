import React, { useState } from 'react'

const ChangeBackground = () => {
    const [changeBack,setChangeBack] =useState("black");
    const handleClick = () => {
        const colors = ["red","yellow","blue","green","pink","orange","violet","purple"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        setChangeBack(randomColor);
    }
  return (
    <div style={{backgroundColor : changeBack, height : "400px" ,width : "400px",color : "white"}}>
      <h3>Hello</h3>
      <button onClick={handleClick}>Change Background</button>
    </div>
  )
}

export default ChangeBackground
