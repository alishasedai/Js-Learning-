import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Bye  from './Bye'
import Hello from './Hello'

function App() {
  // const [count, setCount] = useState(0)]
  const headingStyle ={
    color : "red",
    textAlign : "center",
    backgroundColor : "Green",
    fontSize : "20px"
  }

  return (
    <>
     
        {/* <div className="hero"> */}
          {/* <img src={heroImg} className="base" width="170" height="179" alt="" /> */}
          {/* <img src={reactLogo} className="framework" alt="React logo" /> */}
          {/* <img src={viteLogo} className="vite" alt="Vite logo" /> */}
        {/* </div> */}
        <div>
          {/* <h1 style={{color:"red"}}>Alisha Sedai</h1> */}
          <h1 className='test'>Alisha Sedai</h1>
          {/* <Bye /> */}
          <Hello/>
         
        </div>
        
    </>
  )
}

export default App
