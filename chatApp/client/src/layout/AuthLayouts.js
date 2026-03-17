import React from 'react'
import logo from '../assets/images.png'
const AuthLayouts = ({children}) => {
  return (
    <>
      <header className='flex justify-center items-center py-3 px-5 h-25 shadow-md'>
        <img src={logo} alt="logo" width={130} height={20}></img>
      </header>
      {children}
    </>
  );
}

export default AuthLayouts; 
