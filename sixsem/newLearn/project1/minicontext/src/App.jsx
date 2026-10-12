import React from 'react'
import { UerContext } from './context/UserContext'
import Home from './components/Home'
import {BrowserRouter, Routes,Route} from "react-router-dom" ;
import About from './components/About';


const App = () => {
  return (
   
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-hehe' element={<About />} />
     </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App
