import React from 'react'
import { useState, useEffect } from 'react'
const WindowSizeTracker = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleWidth = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize",handleWidth)
       
        return (() => {
            window.removeEventListener("resize",handleWidth);
            console.log("Unsubscribe from resize event");
        })
    },[])
  return (
    <div>
     <h2>Window Width Tracker</h2>
     <p>Current Width : {width}px</p>


    </div>
  )
}

export default WindowSizeTracker


 
