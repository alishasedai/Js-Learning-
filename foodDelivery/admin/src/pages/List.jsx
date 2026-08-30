import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-toastify';

const List = ({url}) => {
  const [list,setList]= useState([]);
  const fetchList =  async () =>{
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data)
    if(response.data.success){
      setList(response.data.data);
    }else{
      toast.error("Error")
    }
  }
  const removeFood = async(foodId) => {
    console.log("foodId :",foodId);
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message);

    }
    else{
      toast.error("Error")
    }
  }
  useEffect(() => {
    fetchList();

  },[])
  return (
    <div className='w-[80%]  ml-12.5 mt-10 '>
      <p>All Food List</p>
      <div className='mt-3'>
        <div className="listTableFormat bg-[#f9f9f9] border border-[#cacaca] grid grid-cols-[1fr_1.5fr_1fr_1fr_0.5fr] items-center gap-2.5 py-3 px-3.5">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index) => {
          return (
            <div key={index} className='grid w-full grid-cols-[1fr_1.5fr_1fr_1fr_0.5fr] border border-[#cacaca] justify-center items-center gap-2.5 py-3 px-3.5'>
              <img src={`${url}/images/`+item.image} className='w-20 h-20' alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className='cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
