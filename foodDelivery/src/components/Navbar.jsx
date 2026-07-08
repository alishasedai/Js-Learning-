import React, { useState } from 'react'
import { assets, icons } from '../assets/assests';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdClose } from "react-icons/md";
const Navbar = () => {
const [menu,setMenu] =useState("home");
const[open,setOpen] = useState(false);

  return (
    <div className='flex sm:flex-row md:flex-row relative lg:flex-row w-full justify-between items-center'>
       <img src={assets.logo} className='h-20 w-40' onClick={() => setOpen(prev => !prev)} alt="" />
     
  <ul
  className={`
    ${open ? "flex" : "hidden"}
    md:flex
    flex-col
    md:flex-row
    absolute
    md:static
    left-0
    top-0
    w-full
    md:w-auto
    text-gray-900
    gap-8
    justify-center
    items-center
    p-5
    bg-[#cce8e3]
    md:text-gray-900
    md:bg-transparent
  `}
>

    <MdClose className='md:hidden absolute top-0 bg-green-900 rounded-full right-0 text-white p-1' onClick={() => setOpen(prev => !prev)} size={30}/>
        <li onClick={() => setMenu("home")} className={`cursor-pointer  text-sm ${menu === "home" ? "border-b-2 border-gray-600 text-red-800" : ""}`}>Home</li>
        <li onClick={() => setMenu("menu")} className={`cursor-pointer text-sm  ${menu === "menu" ? "border-b-2 border-gray-600 text-red-800" : ""}`} >Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={`cursor-pointer text-sm ${menu === "mobile-app" ? "border-b-2 border-gray-600 text-red-800" : ""}`}>Mobile-app</li>
        <li onClick={() => setMenu("contact")} className={`cursor-pointer  text-sm  ${menu === "contact" ? "border-b-2 border-gray-600 text-red-800" : ""}`}>Contact us</li>
      </ul>
      <div className="flex gap-4 items-center justify-center">
              <FaSearch size={20} />

      {/* Cart Icon */}
      <FaShoppingCart size={22} />
      <button className='bg-transparent border border-gray-400 h-9 w-20 rounded-lg text-md md:text-xl cursor-pointer hover:bg-yellow-100'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
