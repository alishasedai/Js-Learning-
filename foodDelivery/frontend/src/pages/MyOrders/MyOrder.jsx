import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useEffect } from 'react';
import { assets, icons } from '../../assets/assests';

const MyOrder = () => {
    const{url,token} = useContext(StoreContext)
    const [data,setData] = useState([]);
    const fetchOrders = async() => {
        const response = await axios.post(url+"/api/order/userOrders",{},
            {headers : {
                token : token
            }}
        )
        setData(response.data.data);
        console.log("response.data.data",response.data.data)
    }

    useEffect(() => {
        if(token){
            fetchOrders();
        }
    },[token])
  return (
    <div className='my-[30px]'>
      <h2>My Orders</h2>
      <div className="flex flex-col gap-20 mt-6">
        {data.map((order,index) => {
            return (
              <div
                key={index}
                className="grid items-center justify-around grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] gap-5 text-md text-[#454545] border-1 border-red-200 py-6 px-6 "
              >
                <img className="w-20 " src={icons.parcel} alt="" />
                <p>
                  {order.items.map((item, indx) => {
                    if (indx === order.items.length - 1) {
                      return item.name + " X " + item.quantity;
                    } else {
                      return item.name + " X " + item.quantity + " , ";
                    }
                  })}
                </p>
                <p>${order.amount}.00</p>
                <p>Items :{order.items.length}</p>
                <p>
                  <span className="text-red-400">&#x25cf;</span>
                  <b>{order.status}</b>
                </p>
                <button className="bg-[#ffe1e1] flex justify-center item-center cursor-pointer py-4 p-2 rounded-xl">
                  Track Order
                </button>
              </div>
            );
        })}
      </div>
    </div>
  )
}

export default MyOrder
