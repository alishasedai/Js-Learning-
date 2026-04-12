import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Bye  from './Bye'
import Hello from './Hello'
import Rendering from './Rendering'

function App() {
  // const [count, setCount] = useState(0)]
  const headingStyle ={
    color : "red",
    textAlign : "center",
    backgroundColor : "Green",
    fontSize : "20px"
  }
  const isLoggedIn = false;

  if(isLoggedIn){
  return (
    <>
        <div>
          {/* <h1 style={{color:"red"}}>Alisha Sedai</h1> */}
          <h1 className='test'>Alisha Sedai</h1>
          {/* <Bye /> */}
          {/* <Hello/> */}
          {/* <Rendering/> */}
         
        </div>
        
    </>
  )}
  else{
    return (
      <Bye/>
    )
  }
}

export default App
