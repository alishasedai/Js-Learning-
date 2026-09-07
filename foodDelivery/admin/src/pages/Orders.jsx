import React from 'react'
import {toast} from 'react-toastify'
import axios from "axios"
import {useState,useEffect} from "react";
import assets from "../assets/assets";

const Orders = ({url}) => {
  const [order,setOrder] = useState([]);
  const fetchAllOrders = async () => {
    const response =  await axios.get(url+"/api/order/list")
    if(response.data.success){
      setOrder(response.data.data);
      console.log(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }
  const statusHandler = async (event,orderId) => {
    console.log("event,orderId :", event, orderId);
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status : event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
      
    }
  }
  useEffect(() => {
    fetchAllOrders()
  },[])
  
  return (
    <div className=" ml-10 mt-10">
      <h3>Order Page</h3>
      <div>
        {order.map((order, index) => (
          <div
            key={index}
            className="grid  grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-5 p-4 text-md text-[#505050] mt-4 mb-4 border-1 border-red-200"
          >
            <img src={assets.parcel} alt="" className="h-20 w-20" />
            <div>
              <p className="text-md font-bold text-blue-600">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " X " + item.quantity;
                  } else {
                    return item.name + " X " + item.quantity + " , ";
                  }
                })}
              </p>
              <p className="mb-5 text-xl font-bold text-green-600">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="mb-5">
                <p>{order.address.street + ", "}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    " , " +
                    order.address.street +
                    " , " +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event) => statusHandler(event,order._id)}
              value={order.status}
              name=""
              id=""
              className="bg-[#ffe1e1] cursor-pointer py-4 p-2 rounded-xl"
            >
              <option value="Food processing">Food processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders
