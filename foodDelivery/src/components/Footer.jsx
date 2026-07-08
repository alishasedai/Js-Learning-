import React from 'react'
import { assets } from '../assets/assests'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row m-10 items-center md:p-10 p-3 rounded-lg  text-gray-800 text-lg bg-[#cce8e3]'>
      <div className='flex md:justify-between  md:flex-row flex-col'>
        <div className='md:w-1/2 w-full leftss'>
            <img src={assets.logo} alt="" className=' h-16 w-30 bg-white rounded-full mb-2'/>
            <p className='md:text-2xl text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis porro unde, rovidentminus? Tempore beatae aperiam corrupti placeat earum.</p>
            <div className='social-icons gap-2 w-1/2 flex  gap-1'>
               <FaFacebookF size={50} className='border border-yellow-400 rounded-full p-2'/>
               <IoLogoTwitter size={50} className='border border-yellow-400 rounded-full p-2 '/>
               <FaInstagram size={50} className='border border-yellow-400 rounded-full p-2'/> 
                
            </div>
        </div>
        <div className=' w-[120px] centersDiv mt-5 mb-5'>
            <h2 className='md:text-2xl text-xl font-bold mb-3'>COMPANY</h2>
            <ul className='md:text-2xl text-lg'>
                <li>Home </li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='rightDivs w-[180px]'>
            <h2 className='text-2xl font-bold mb-3'>GET IN TOUCH</h2>
            <ul>
                <li>+977 9818085297</li>
                <li>tornato@gmail.com</li>
            </ul>
        </div>
      </div>
      
      <hr className=''/>
     
      <p className='mt-6 w-full font-extrabold'>Copyright 2026 &copy; Tornato.com- All Right Reserved.</p>
    </div>
  )
}

export default Footer
