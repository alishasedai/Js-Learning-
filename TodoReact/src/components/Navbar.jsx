import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex py-3 justify-between bg-blue-500 text-white'>
      <div className="logo">
        <span className='font-bold text-xl mx-9'>iTask</span>
      </div>
      <ul className='flex gap-5 mx-9  '>
       <li className='cursor-pointer hover:font-bold'>Home</li>
       <li className='cursor-pointer hover:font-bold'>Your Tasks</li> 
      </ul>
      </nav>
  )
}

export default Navbar
