import React, { useEffect, useState } from 'react'
import { FaFileUpload } from "react-icons/fa";
import assets from '../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({url}) => {
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name : "",
        description : "",
        price : "",
        category : "Salad"
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name] : value}))
    }
    useEffect(() => {
        console.log(data);
    },[data])
    const onSubmitHandler = async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(
      `${url}/api/food/add`,
      formData
    );

    if (response.data.success) {
      toast.success(response.data.message);

      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad"
      });

      setImage(false);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.message || error.message);
  }
};
  return (
    <div className='w-[70%] ml-12 text-[#6d6d6d] mt-8 text-md'>
      <form action="" onSubmit={onSubmitHandler} className='flex w-full  flex-col'>
        <div className="add-img-upload flex flex-col gap-2">
            <p>Upload Image: </p>
            <label htmlFor="image">
                <img src={image ? URL.createObjectURL(image) : assets.upload} className='w-25 h-20 border' alt="" />
            </label>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" name="" id="image"  required />
        </div>
        <div className="addProduct-name mt-3 w-[60%] ">
            <p>Product Name</p>
            <input value={data.name} onChange={onChangeHandler} className='border w-full p-2' type="text" name="name" placeholder='Type here' id="" />
        </div>
        <div className="addProduct-description mt-3 w-[60%] ">
            <p>Product Description</p>
            <textarea value={data.description} onChange={onChangeHandler} className='w-full border' name="description" rows="4" placeholder='Write content here' id=""></textarea>
        </div>
        <div className="add-category-price flex mt-3 gap-5 items-center">
            <div className="addCategory">
                <p >Product Category</p>
                <select onChange={onChangeHandler} name="category" id="" className='w-30 p-2 border'>
                    <option value="Salads">Salads</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className="addPrice w-[12%]">
                <p>Product Price</p>
                <input onChange={onChangeHandler} value={data.price} className='border flex flex-col gap-2 w-30 p-2' type="number" name='price' placeholder='$20' />
            </div>
        </div>
        <button className='bg-black p-2.5 w-30 border-none mt-5 rounded-sm text-white' type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default Add
