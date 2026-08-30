import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form action="" className='place-order mt-3 flex items-start gap-50 justify-between ' >
      <div className="left flex flex-col ">
      <p>Delivery Information</p>
      <div className='flex gap-2'>
        <input type="text" className='mb-4 border p-2 w-full' placeholder='First Name' />
        <input type="text" className='mb-4 border p-2 w-full' placeholder='Last Name'/>
      </div>
      <input type="text" className='mb-4 border p-2 w-full' placeholder='Email Address'/>
      <input type="text" className='mb-4 border p-2 w-full' placeholder='Street'/>
      <div className='flex gap-2'>
        <input type="text" className='mb-4 border p-2 w-full' placeholder='City'/>
        <input type="text" className='mb-4 border p-2 w-full' placeholder='State'/>
      </div>
          <div className='flex gap-2'>
        <input type="text" className='mb-4 border p-2 w-full' placeholder='Zip code'/>
        <input type="text" className='mb-4 border p-2 w-full' placeholder='Country'/>
      </div>
      <input type="text" className='mb-4 border p-2 w-full' placeholder='Phone' />
      </div>
      <div className="right flex flex-1 justify-center ">
        <div className="total flex flex-col w-full">
              <h2 className='font-bold text-2xl mb-2'>Cart Totals</h2>
              <div>
                <div className="cart-total-details flex justify-between text-black ">
                  <p>Sub Totals</p>
                  <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}</p>
                </div>
                <hr className='mt-[8px] mb-2 text-gray-400'/>
                <div className='cart-totals-sub flex justify-between text-black '>
                  <p>Delivery Fees</p>
                  <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                </div>
                <hr className='mt-[8px]  text-gray-400' />
                <div className='cart-totals flex justify-between text-black font-extrabold'>
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                </div>
              </div>
            <button className='w-[200px] py-[10px] mt-3 rounded-sm bg-[#ff6347] text-white cursor-pointer'>PROCEED TO PAYMENT</button>

            </div>
      </div>
    </form>
  )
}

export default PlaceOrder
