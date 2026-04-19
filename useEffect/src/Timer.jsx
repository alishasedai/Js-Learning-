import React from 'react'
import { useState, useEffect } from 'react'
const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
       const Interval = setInterval(() => {
        setSeconds((pre) => pre+1);
       },1000)

       return (() => {
        clearInterval(Interval)
       })
    },[])
  return (
    <div>
     <h2>Seconds : {seconds}</h2>
    </div>
  )
}

export default Timer
