import React from 'react'
import logo from '../assets/images.png'
const AuthLayouts = ({children}) => {
  return (
    <>
      <header className='flex justify-center items-center py-3 px-5 h-20 shadow-md bg-white'>
        <img src={logo} alt="logo" width={100} height={10}></img>
      </header>
      {children}
    </>
  );
}

export default AuthLayouts; 
