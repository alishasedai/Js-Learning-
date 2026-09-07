import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {
  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)
  const [data,setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    street : "",
    city : "",
    state : "",
    zipcode : "",
    country : "",
    phone : ""
  })
  const onChangeHandler =(event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name] : value}))
  }
const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];

    food_list.forEach((item) => {
        if (cartItems[item._id] > 0) {
            let itemInfo = { ...item };
            itemInfo.quantity = cartItems[item._id];
            orderItems.push(itemInfo);
        }
    });

    let orderData = {
        address: data,
        items: orderItems,
        amount: getTotalCartAmount() + 2
    };

    try {
        const response = await axios.post(
            url + "/api/order/place",
            orderData,
            {
                headers: {
                    token: token
                }
            }
        );

        if (response.data.success) {

            const payment = response.data.payment;

            console.log("eSewa Payment:", payment);

            // Create form
            const form = document.createElement("form");

            form.method = "POST";

            // eSewa TEST payment URL
            form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

            // Add payment fields
            Object.keys(payment).forEach((key) => {

                const input = document.createElement("input");

                input.type = "hidden";
                input.name = key;
                input.value = payment[key];

                form.appendChild(input);
            });

            // Add form to page
            document.body.appendChild(form);

            // Submit to eSewa
            form.submit();

        } else {
            alert(response.data.message);
        }

    } catch (error) {
        console.log(error);
        alert("Something went wrong while placing the order");
    }
};
  return (
    <form action="" onSubmit={placeOrder} className='place-order mt-3 flex items-start gap-50 justify-between ' >
      <div className="left flex flex-col ">
      <p>Delivery Information</p>
      <div className='flex gap-2'>
        <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" className='mb-4 border p-2 w-full' placeholder='First Name' />
        <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" className='mb-4 border p-2 w-full' placeholder='Last Name'/>
      </div>
      <input required type="text" name='email' onChange={onChangeHandler} value={data.email} className='mb-4 border p-2 w-full' placeholder='Email Address'/>
      <input required type="text" name='street' onChange={onChangeHandler} value={data.street} className='mb-4 border p-2 w-full' placeholder='Street'/>
      <div className='flex gap-2'>
        <input required type="text" name='city' onChange={onChangeHandler} value={data.city} className='mb-4 border p-2 w-full' placeholder='City'/>
        <input required type="text" name='state' onChange={onChangeHandler} value={data.state} className='mb-4 border p-2 w-full' placeholder='State'/>
      </div>
          <div className='flex gap-2'>
        <input required type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} className='mb-4 border p-2 w-full' placeholder='Zip code'/>
        <input  required type="text" name='country' onChange={onChangeHandler} value={data.country} className='mb-4 border p-2 w-full' placeholder='Country'/>
      </div>
      <input required type="text" name='phone' onChange={onChangeHandler} value={data.phone} className='mb-4 border p-2 w-full' placeholder='Phone' />
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
            <button type='submit' className='w-[200px] py-[10px] mt-3 rounded-sm bg-[#ff6347] text-white cursor-pointer'>PROCEED TO PAYMENT</button>

            </div>
      </div>
    </form>
  )
}

export default PlaceOrder
