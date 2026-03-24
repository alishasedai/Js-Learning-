import React, { useEffect } from 'react'
import { useState } from 'react'
import Avatar from './Avatar'
import uploadFile from "../helpers/uploadFile"
import Divider from './Divider'

const EditUserDetails = ({onClose,user}) => {
    const [data,setData] = useState({
        name : user?.name,
        profile_pic : user?.profile_pic
    })
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
    }
    const handleOPenUploadPhoto = () => {

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
            <label htmlFor="profile_pic">Photo</label>
            <div className="my-1 flex items-center gap-4">
              <Avatar
                width={50}
                height={50}
                // imageUrl={data?.profile_pic}
                name={data?.name}
              />
              <button className="font-semibold" onClick={handleOPenUploadPhoto}>Change Photo</button>
              <input
                type="file"
                className="hidden"
                onChange={handleUploadPhoto}
              />
            </div>
          </div>
          <Divider/>
          <div className='flex gap-2 w-fit ml-auto '>
            <button type='button' onClick={onClose} className='border border-blue-300 text-blue-300     rounded py-1 px-3 hover:bg-blue-300 hover:text-white'>Cancel</button>
            <button type='submit' onSubmit={handleSubmit} className='bg-blue-400 text-white rounded py-1 px-5'>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default React.memo(EditUserDetails);
