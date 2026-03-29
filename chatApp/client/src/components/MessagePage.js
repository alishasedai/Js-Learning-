import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {useParams} from "react-router"
import { useState } from 'react';
import Avatar from './Avatar';
import { HiDotsVertical } from "react-icons/hi";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

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
          <Link to={"/"} className='lg:hidden'>
        <FaAngleLeft size={30}/>
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
                <span className="text-slate-500">offline</span>
              )}
            </p>
          </div>
        </div>
        <div>
          <button className='cursor-pointer hover:text-blue-500'>
            <HiDotsVertical />
          </button>
        </div>
      </header>
      {/* Show all message here */}
      <section>
        Show all message
      </section>
    </div>
  );
}

export default MessagePage
