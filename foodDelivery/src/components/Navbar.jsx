import React, { useState } from 'react'
import { assets } from '../assets/assests';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
const [menu,setMenu] =useState("home");
  return (
    <div className='flex flex-row justify-around  items-center'>
      <img src={assets.logo} className='h-20 w-40' alt="" />
      <ul className='flex flex-row text-lg -mt-0 gap-10 text-[#49557e]'>
        <li onClick={() => setMenu("home")} className={`cursor-pointer ${menu === "home" ? "border-b-2 border-gray-600 text-red-800" : ""}`}>Home</li>
        <li onClick={() => setMenu("menu")} className={`cursor-pointer ${menu === "menu" ? "border-b-2 border-gray-600 text-red-800" : ""}`} >Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={`cursor-pointer ${menu === "mobile-app" ? "border-b-2 border-gray-600 text-red-800" : ""}`}>Mobile-app</li>
        <li onClick={() => setMenu("contact")} className={`cursor-pointer ${menu === "contact" ? "border-b-2 border-gray-600 text-red-800" : ""}`}>Contact us</li>
      </ul>
      <div className="flex gap-4 items-center justify-center">
              <FaSearch size={20} />

      {/* Cart Icon */}
      <FaShoppingCart size={22} />
      <button className='bg-transparent border border-gray-400 h-9 w-20 rounded-lg text-xl cursor-pointer hover:bg-yellow-100'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
