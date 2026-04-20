import React from 'react'
import First from './First'
import Timer from './Timer'
import WindowSizeTracker from './WindowSizeTracker'
import Users from './Users' 
import {BrowserRouter, Routes,Route, Link, NavLink, useParams, useNavigate} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import Phone from './Phone'
import Laptop from './Laptop'
const App = () => {
  function Users(){
    console.log(useParams());
    const {id} = useParams();

    return <h2>user profile : {id}</h2>


  }
  
  function NotFound(){
    return <h2>404- Page not found</h2>
  }
  return (
    // <div>
    //   {/* <First/>
    //   <Timer/> */}
    //   {/* <WindowSizeTracker/> */}
    //   <Users />
    // </div>
    <BrowserRouter>
    <h2>React Router Example</h2>
    <div>
      
<NavLink
  to="/"
  style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black"
    };
  }}
>
  Home |
</NavLink>

    |
    <NavLink
  to="/about"
  style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black"
    };
  }}
>
  About |
</NavLink> 
    <Link to="/contact">Contact |</Link>
     <Link to="/users/10">User</Link> |
     <Link to={"/product"}>Products </Link>
    </div>

    {/* <a href="/">Home</a>|
    <a href="/about">About</a> |
    <a href="/contact">Contact</a> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path='/users/:id' element={<Users />}/>
        <Route path='*' element={<NotFound />}/>
        <Route  path='/product' element={<Product />}>
        <Route path='phone' element={<Phone />}/>
        <Route path='laptop' element={<Laptop />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
