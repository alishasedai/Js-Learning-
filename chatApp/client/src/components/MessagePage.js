import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {useParams} from "react-router"
import { useState } from 'react';
import Avatar from './Avatar';
import { HiDotsVertical } from "react-icons/hi";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { FaImage } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import uploadFile from '../helpers/uploadFile';


const MessagePage = () => {
  const params = useParams();
  const socketConnection = useSelector(state => state?.user?.socketConnection)
  const user = useSelector(state => state?.user)
  const [dataUser,setDataUser] = useState({
    name : "",
    email : "",
    profile_pic : "",
    online : false,
    _id : ""
  })
  const [openImageVideoUpload,setOpenImageVideoUpload] = useState(false);
  const [message,setMessage] = useState({
    text : "",
    imageUrl : "",
    videoUrl : ""
  })
  const handleUploadImageVideoOpen =(e) => {
     e.stopPropagation();
     console.log("clicked");
    setOpenImageVideoUpload(prev => !prev)
  }
  const handleUploadImage = async(e) => {
     const file = e.target.files[0];

    const response = await uploadFile(file); // rename (important)
    setMessage((prev) => {
      return {
        ...prev,
        imageUrl : response.url
      }
    })
    console.log("Upload photo", response);

    

    // setDataUser((prev) => ({
    //   ...prev,
    //   profile_pic: response?.url,
    // }));
  }
  const handleUploadVideo = async(e) => {
    const file = e.target.files[0];

    const response = await uploadFile(file); // rename (important)
    setMessage((prev) => {
      return {
        ...prev,
        videoUrl : response.url
      }
    })
  }

  console.log("params",params.userId)
  useEffect(() => {
    if(socketConnection){
      socketConnection.emit("message-page",params.userId)
      socketConnection.on("message-user",(data) => {
        // console.log("user details",data)
        setDataUser(data)
      });
    }
  },[socketConnection,params?.userId,user])

  return (
    <div>
      <header className="sticky top-0 h-16 bg-white flex justify-between items-center px-5">
        <div className="flex items-center gap-4">
          <Link to={"/"} className="lg:hidden">
            <FaAngleLeft size={30} />
          </Link>
          <div>
            <Avatar
              width={40}
              height={50}
              imageUrl={dataUser?.profile_pic}
              name={dataUser?.name}
              userId={dataUser?._id}
            />
          </div>
          <div>
            <h3 className="font-semibold my-0">{dataUser?.name}</h3>
            <p className="text-sm">
              {dataUser.onlineUser ? (
                <span className="text-blue-500">online</span>
              ) : (
                <span className="text-slate-500 text-sm">offline</span>
              )}
            </p>
          </div>
        </div>
        <div>
          <button className="cursor-pointer hover:text-blue-500">
            <HiDotsVertical />
          </button>
        </div>
      </header>
      {/* Show all message here */}
      <section className="h-[calc(100vh-128px)] overflow-x-hidden overflow-y-scroll ">
        {/* upload Image display */}
        <div className='w-full h-full bg-slate-700 bg-opacity-30 flex justify-center items-center rounded overflow-hidden'>
          <div className='bg-white p-3'>
            <img
            src={message.imageUrl}
            height={300}
            width={300}
            alt='uploadImage'/>
          </div>

        </div>
        Show all message

      </section>
      <section className="h-16 bg-white flex items-center px-4">
        {/* send message */}
        <div className="relative ">
          <button
            onClick={handleUploadImageVideoOpen}
            className="flex justify-center items-center h-11 w-11 rounded-full hover:bg-blue-500 hover:text-white"
          >
            <FaPlus size={20} />
          </button>
          {/* video and image */}
          {openImageVideoUpload && (
            <div className="bg-white shadow rounded absolute bottom-14 w-36 p-2">
              <form>
                <label
                  htmlFor="uploadImage"
                  className="flex items-center p-2 gap-3 hover:bg-slate-200 cursor-pointer"
                >
                  <div className="text-blue-400">
                    <FaImage size={18} />
                  </div>
                  <p>Image</p>
                </label>
                <label
                  htmlFor="uploadVideo"
                  className="flex items-center p-2 gap-3 hover:bg-slate-200 cursor-pointer"
                >
                  <div className="text-purple-500">
                    <FaVideo size={18} />
                  </div>
                  <p>Video</p>
                </label>
                <input type="file" id="uploadImage" onChange={handleUploadImage}/>
                <input type="file" id="uploadVideo" onChange={handleUploadVideo} />
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default MessagePage
