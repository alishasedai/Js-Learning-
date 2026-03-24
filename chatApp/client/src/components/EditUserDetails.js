import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Avatar from './Avatar'
import uploadFile from "../helpers/uploadFile"
import Divider from './Divider'
import toast from 'react-hot-toast'
import axios from 'axios'
import {useDispatch} from "react-redux";
import { setUser } from "../redux/userSlice";

const EditUserDetails = ({onClose,user}) => {
    const [data,setData] = useState({
        name : user?.name,
        
        profile_pic : user?.profile_pic
    })
    const uploadPhototRef = useRef()
    const dispatch = useDispatch()
    useEffect(() => {
        setData((prev) => {
            return {
                ...prev,
                ...user
            }
        })
    },[user])
    console.log('user edit',user)
    const handleOnChange = (e) => {
        const {name,value} =e.target
        setData((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })

    }
    const handleUploadPhoto = async(e) => {
        
        const file = e.target.files[0];
        const uploadPhoto = await uploadFile(file);

        setData((prev) => {
            return {
                ...prev,
                profile_pic: uploadPhoto?.url
            }
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        e.stopPropagation()
       
        try{
          const URL = `${process.env.REACT_APP_BACKEND_URL}/api/update-details`;
          const response =await axios({
            method :"post",
            url : URL,
            data : data,
            withCredentials : true
          })
          console.log("response",response)
           toast.success(response?.data?.message);

           if(response.data.success){
            dispatch(setUser(response.data.data))
           }

        }catch(e){
          toast.error(e?.response?.data.message)
        }
    }
    const handleOPenUploadPhoto = (e) => {
        e.preventDefault();
        e.stopPropagation();
      uploadPhototRef.current.click()
    }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 py-5 m-1 rounded w-full max-w-sm">
        <h2 className="font-semibold">Profile Details</h2>
        <p className="text-sm">Edit user details</p>
        <form className="grid gap-3 mt-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleOnChange}
              className="w-full py-1 px-2 focus:outline-blue-300 border-spacing-0.5 "
            />
          </div>
          <div>
            <div>Photo:</div>
            <div className="my-1 flex items-center gap-4">
              <Avatar
                width={50}
                height={50}
                imageUrl={data?.profile_pic}
                name={data?.name}
              />
              <label htmlFor="profile_pic">
                <button
                  type='button'
                  className="font-semibold"
                  onClick={handleOPenUploadPhoto}
                >
                  Change Photo
                </button>
                <input
                  type="file"
                  id="profile_pic"
                  className="hidden"
                  onChange={handleUploadPhoto}
                  ref={uploadPhototRef}
                />
              </label>
            </div>
          </div>
          <Divider />
          <div className="flex gap-2 w-fit ml-auto ">
            <button
              type="button"
              onClick={onClose}
              className="border border-blue-300 text-blue-300     rounded py-1 px-3 hover:bg-blue-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-400 text-white rounded py-1 px-5"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default React.memo(EditUserDetails);
