import React from 'react'
import { menu_list } from '../assets/assests'

const ExploreMenu = ({category,setCategory}) => {
 
  return (
    <div className=' w-full gap-2 flex flex-col items-start justify-center'>
      <h1 className='font-extrabold text-xl md:text-2xl '>Explore Menu</h1>
      <p className='md:text-md text-sm'>Choose from a diverse menu featuring a delectable array of dishes
        Our mission is to satisfy customers
      </p>
      <div className='w-full h-[17vh] md:h-[30vh] flex md:gap-10 gap-1 overflow-x-auto items-center  text-center'>
        {menu_list.map((item,index) => {
          return <div onClick={() => setCategory(prev => prev===item.menu_name ? "all" : item.menu_name)} className='h-30 w-30 flex  flex-col items-center justify-start gap-1 shrink-0 ' key={index}>

            <img  src={item.menu_image} className={` ${category === item.menu_name ? "border-5 border-red-400" : ""} md:h-30 h-20 w-20 md:w-30 object-cover bg-red-900 rounded-full cursor-pointer`} alt="item" />
            <p className='md:text-xl text-sm font-extrabold text-gray-500'>{item.menu_name}</p>  
          </div>
        })}
        
      </div>
      <hr className='h-8 '/>
    </div>
  )
}

export default ExploreMenu
