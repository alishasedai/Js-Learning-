import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { GoListOrdered } from "react-icons/go";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
   <div className="sidebar flex flex-col gap-5 w-15 sm:w-20 md:w-[18%] min-h-lvh border-2">
  <div className="sidebar-options pt-8 flex flex-col gap-5 px-2">
    
    <NavLink to="/add" className={({isActive}) => `sidebar-option ${isActive ? "bg-red-200 border border-[#ff6347]" : " border-gray-500"} ml-2 w-full flex items-center justify-center md:justify-start gap-2 border px-2 py-2 cursor-pointer`}>
      <IoMdAdd />
      <p className="hidden md:block">Add Items:</p>
    </NavLink>

    <NavLink to="/list" className={({isActive}) => `sidebar-option ${isActive ? "bg-red-200 border border-[#ff6347]" : " border-gray-500"} ml-2 w-full flex items-center justify-center md:justify-start gap-2 border  px-2 py-2 cursor-pointer`}>
      <FaRegListAlt />
      <p className="hidden md:block">List Items:</p>
    </NavLink>

    <NavLink to="/orders" className={({isActive}) => `sidebar-option ${isActive ? "bg-red-200 border border-[#ff6347]" : " border-gray-500"} ml-2 w-full flex items-center justify-center md:justify-start gap-2 border  px-2 py-2 cursor-pointer`}>
      <GoListOrdered />
      <p className="hidden md:block">Orders:</p>
    </NavLink>

  </div>
</div>
  )
}

export default Sidebar
