import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list } = useContext(StoreContext)
    console.log(category)
  return (
    <div className=''>
      <h2 className='text-3xl font-extrabold'>Top Dishes near you</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-content-center gap-3'>
        {food_list.map((list,index) => {
         console.log(list.category);
          if(category === "all" || category === list.category){
            
            
             return <FoodItem key={index} id={list._id} name ={list.name} description ={list.description} image={list.image} category={list.category} price={list.price}>

            </FoodItem>
           
          }
        
            
   
           
        }
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
