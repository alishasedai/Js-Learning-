import React from 'react'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='mt-6 border-2 border-amber-200 rounded-xl flex flex-col justify-around  items-center'>   
      <div>
        <img src={image} alt="" className='w-70 h-60 border-b-2 rounded-t-2xl' />
      </div>
      <div className='mt-6 w-[90%]'>
        <div className='flex gap-6 justify-between items-center'>
            <p className='text-2xl font-extrabold'>{name}</p>
            <p className=' font-semibold text-green-700'>${price}</p>
        </div>
        
            <p>{description}</p>
            
        
      </div>
    </div>
  )
}

export default FoodItem
