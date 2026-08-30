import React from 'react'
import { menu_list } from '../assets/assests'

const ExploreMenu = ({category,setCategory}) => {
 
  return (
    <div className=' w-full gap-2 flex flex-col items-start justify-center'>
      <h1 className='font-extrabold text-xl md:text-2xl '>Explore Menu</h1>
      <p className='md:text-xl text-sm'>Choose from a diverse menu featuring a delectable array of dishes
        Our mission is to satisfy customers
      </p>
      <div className='w-full h-[30vh] md:h-[34vh] flex md:gap-10 gap-1 overflow-x-auto overflow-y-hidden  items-start pt-3  text-center'>
        {menu_list.map((item,index) => {
          return <div onClick={() => setCategory(prev => prev===item.menu_name ? "all" : item.menu_name)} className='h-30 w-30 flex  flex-col items-center justify-start gap-1 shrink-0 ' key={index}>
      <img
        src={item.menu_image}
        className={`w-24 h-24 md:w-32 md:h-32 rounded-full object-cover flex-shrink-0 ${category === item.menu_name ?" border-4 border-red-400" : ""}` }
        alt=""
      />
            <p className='md:text-xl text-sm font-extrabold text-gray-500'>{item.menu_name}</p>  
          </div>
        })}
        
      </div>
      <hr className=''/>
    </div>
  )
}

export default ExploreMenu
