import React from 'react'
import {BrowserRouter, Routes, Route,useParams,Link} from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Home from './Home'
import User from './User'
import UserNotFound from './UserNotFound'
import Products from './Products'
import Phone from './Phone'
import Laptop from './Laptop'
const App = () => {
  
  return (
   
    <div>
     
      <BrowserRouter>
       <nav>
         <Link to="/" >Home</Link> |
      <Link to="/about">About</Link>|
      <Link to="/contact">Contact</Link> |
      <Link to="/user/10">User</Link> |
      <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:id" element={<User />} />
      <Route path='/products' element={<Products />}>
        <Route path='phone' element={<Phone />}/>
        <Route path='laptop' element={<Laptop />}/>
      </Route>
      <Route path='*' element={<UserNotFound />} />


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
