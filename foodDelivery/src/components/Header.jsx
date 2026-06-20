import React from 'react'
import { assets } from '../assets/assests'

const Header = () => {
  return (
    <div
      className="h-[70vh] w-1/2 mx-auto my-10  flex items-center justify-center bg-red-900 md:mx-auto mx:mt-10"
    //   style={{ backgroundImage: `url(${assets.bg})` }}
    >
      <div className="text-white h-[60vh] w-1/2 flex flex-col items-center justify-center text-center bg-black/50 p-6 rounded-xl ">

        <h2 className="text-4xl font-bold">
          Order your favourite food here
        </h2>

        <p className="mt-40">
          Choose from a diverse menu featuring a delectable array of dishes created with fresh food.
        </p>

        <button className="h-8 w-30 font-bold  bg-red-700 text-gray-200 rounded-md">
          View Menu
        </button>

      </div>
    </div>
  )
}

export default Header