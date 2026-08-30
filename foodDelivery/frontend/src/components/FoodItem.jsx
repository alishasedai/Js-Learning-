import React, { useContext } from 'react'

import { assets ,icons } from '../assets/assests';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({id,name,price,description,image,category}) => {
   
    const {cartItems,setCartItems,addToCart,removeFromCart,url} = useContext(StoreContext)
  

  return (

    <div className='mt-6 border bg-gray-200 border-amber-200 rounded-xl flex flex-col justify-around  items-center'>   
      <div className='w-full relative '>
        <img src={url+"/images/"+image} alt="" className=' w-full bg-cover h-70 rounded-t' />
        {
            !cartItems[id] 
            ? <img onClick={() => addToCart(id) } src={icons.plus} className=' absolute bottom-4 right-3 bg-white rounded-full w-7 h-7 p-2 cursor-pointer' />
            : <div className='flex absolute bottom-4 right-3 bg-white rounded-md items-center'>
              <img onClick={() =>removeFromCart(id)} src={icons.remove} alt="" className=' w-8 h-8 bg-white rounded-full p-2' />
              <p>{cartItems[id] ?? 0} </p>
              <img src={icons.add_green} className='w-8 h-8 bg-white rounded-full p-2' onClick={() => addToCart(id) } alt="" />
            </div>
        }

      </div>
      <div className='mt-6 w-[90%]  '>
        <div className='flex gap-6 justify-between items-center'>
            <p className='text-2xl font-extrabold'>{name}</p>
            <p className=' font-semibold text-green-700'>${price}</p>
        </div>
            
            <p className='mt-6 text-md'>{description}</p>
            
        
      </div>
    </div>
  )
}

export default FoodItem
