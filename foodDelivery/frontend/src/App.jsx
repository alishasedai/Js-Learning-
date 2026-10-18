import React, { useState, useContext } from "react";
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import MyOrder from './pages/MyOrders/MyOrder'
import {StoreContext} from "./context/StoreContext"


const App = () => {
  const {showLogIn,setShowLogIn} = useContext(StoreContext);

  return (
    <>
      <div className="w-[90%] mx-auto">
        {showLogIn && <LoginForm />}
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place_order" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App
