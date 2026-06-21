import React from 'react'
import { assets } from '../assets/assests'

const Header = () => {
  return (
    <div
      className="h-[70vh] w-full flex items-center justify-center"
    //   style={{ backgroundImage: `url(${assets.bg})` }}
    >
      <div style={{ backgroundImage: `url(${assets.bg})` }} className="text-white h-[60vh] w-full bg-black/50 p-6 rounded-xl bg-cover  ">

       <div className=' h-full flex flex-col gap-6 justify-center w-full rounded-xl mt-0'>
         <h2 className="text-4xl font-bold">
          Order your favourite food here
        </h2>

        <p className="mt-10 text-xl">
          Choose from a diverse menu featuring a delectable array of dishes created with fresh food.
        </p>

        <button className="h-12 w-30 font-bold  bg-gray-200 text-gray-600 rounded-full">
          View Menu
        </button>
       </div>

      </div>
    </div>
  )
}

export default Header