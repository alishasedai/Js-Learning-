import React from 'react'
import { menu_list } from '../assets/assests'

const ExploreMenu = ({category,setCategory}) => {
 
  return (
    <div className=' w-full gap-5 flex flex-col mx-auto items-start justify-center'>
      <h1 className='font-extrabold text-2xl '>Explore Menu</h1>
      <p className='text-md '>Choose from a diverse menu featuring a delectable array of dishes
        Our mission is to satisfy customers
      </p>
      <div className='w-full h-[40vh] flex gap-10 overflow-x-auto items-center  text-center'>
        {menu_list.map((item,index) => {
          return <div onClick={() => setCategory(prev => prev===item.menu_name ? "All" : item.menu_name)} className='bg-red-800 h-40 w-40 flex  flex-col items-center justify-start gap-1 shrink-0 ' key={index}>

            <img  src={item.menu_image} className={` ${category === item.menu_name ? "border-5 border-red-400" : ""} h-30 w-30 object-cover bg-red-900 rounded-full cursor-pointer`} alt="item" />
            <p className='text-xl font-extrabold text-gray-500'>{item.menu_name}</p>  
          </div>
        })}
        
      </div>
      <hr className='h-8 '/>
    </div>
  )
}

export default ExploreMenu
