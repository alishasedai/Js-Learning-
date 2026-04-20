import React from 'react'
import First from './First'
import Timer from './Timer'
import WindowSizeTracker from './WindowSizeTracker'
import Users from './Users' 
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
const App = () => {
  return (
    // <div>
    //   {/* <First/>
    //   <Timer/> */}
    //   {/* <WindowSizeTracker/> */}
    //   <Users />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
