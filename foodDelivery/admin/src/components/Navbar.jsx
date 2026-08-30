import React from 'react'
import assets from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between h-20 items-center ' >
      <img className='logo w-40 h-20' src={assets.logo_food} alt="" />
      <img className='logo rounded-full h-10 w-10' src={assets.profile} alt="" />
    </div>
  )
}

export default Navbar
