import React, { useEffect, useState } from 'react'
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import Avatar from "./Avatar"
import { useDispatch, useSelector } from "react-redux";
import EditUserDetails from './EditUserDetails';
import Divider from './Divider';
import { FiArrowUpLeft } from "react-icons/fi";
import SearchUser from './SearchUser';
import socketConnection from './Socket';
import { FaImage, FaVideo } from "react-icons/fa";

const Sidebar = () => {
  const user = useSelector(state => state?.user);
  const [editUserOpen, setEditUserOpen] = useState(false)
  const [allUser,setAllUser] = useState([])
  const [openSearchUser,setOpenSearchUser] = useState(false)
  
useEffect(() => {
  if (socketConnection && user?._id) {
    console.log("sending user id:", user._id);
    socketConnection.emit("sidebar", user._id);
    socketConnection.on("conversation",(data) => {

      console.log("Conversation ::::",data)
      const conversationUserData = data.map((conversationUser,index) => {
        if(conversationUser?.sender?._id === conversationUser?.receiver?._id){
           return {
             ...conversationUser,
             userDetails : conversationUser?.sender
           };
        }
        else if(conversationUser?.receiver?._id !== user?._id){
          return {
            ...conversationUser,
            userDetails: conversationUser?.receiver,
          };
        }
        else{
          return {
            ...conversationUser,
            userDetails: conversationUser?.sender,
          };
        }
       
      })

      setAllUser(conversationUserData)
    })
  }
}, [socketConnection, user?._id]);

  return (
    <div className="w-full h-full grid grid-cols-[48px,1fr] bg-white">
      <div className="bg-slate-200 flex flex-col justify-between rounded-tr-lg rounded-br-lg w-12 h-full py-5">
        <div>
          <div
            className="w-12 h-12 hover:bg-slate-300 rounded flex justify-center items-center cursor-pointer"
            title="chat"
          >
            <IoChatbubbleEllipses size={25} />
          </div>
         <button
  type="button"
  title="add friend"
  onClick={() => setOpenSearchUser(true)}
  className="w-12 h-12 hover:bg-slate-300 rounded flex justify-center items-center cursor-pointer"
>
  <FaUserPlus size={25} />
          </button>
        </div>
        <div>
          <button
            className="font-normal"
            title={user.name}
            onClick={() => setEditUserOpen(true)}
          >
            <Avatar
              width={50}
              height={50}
              name={user.name}
              imageUrl={user?.profile_pic}
              userId={user?._id}
            />
          </button>
          <button
            title="logout"
            className="w-12 h-12 hover:bg-slate-300 rounded flex justify-center items-center cursor-pointer"
          >
            <span className="-ml-2">
              <CgLogOut size={30} />
            </span>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="h-18 flex items-center">
          <h2 className="text-2xl font-bold p-4 ">Message</h2>
        </div>
        <div className="bg-slate-200 p-[0.5px]"></div>
        <div className=" h-[calc(100vh-70px)] overflow-x-hidden overflow-y-auto scrollbar">
          {allUser.length === 0 && (
            <div className="mt-12">
              <div className="flex justify-center items-center my-4 text-slate-500">
                <FiArrowUpLeft size={50} />
              </div>
              <p className="text-lg text-center text-slate-600">
                Explore users to start a convo
              </p>
            </div>
          )}
          {
            allUser.map((conv,index) => {
              return (
                <div key={conv?._id} className="flex items-center gap-2 p-3 px-2 border border-transparent hover:border-blue-300 cursor-pointer rounded hover:bg-slate-200">
                  <div>
                    <Avatar
                      imageUrl={conv?.userDetails?.profile_pic}
                      name={conv?.userDetails?.name}
                      width={35}
                      height={35}
                    />
                  </div>
                  <div>
                    <h3 className="text-ellipsis line-clamp-1 font-semibold text-base">
                      {conv?.userDetails?.name}
                    </h3>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <div>
                        {conv?.lastMsg?.imageUrl && (
                          <div className="flex items-center gap-2">
                            <span>
                              <FaImage />
                            </span>
                            {!conv.lastMsg.text && <span>Image</span>}
                          </div>
                        )}
                        {conv?.lastMsg?.videoUrl && (
                          <div className="flex items-center gap-2">
                            <span>
                              <FaVideo />
                            </span>
                            {!conv.lastMsg.text && <span>Video</span>}
                          </div>
                        )}
                      </div>
                      <p>{conv?.lastMsg?.text}</p>
                    </div>
                  </div>
                  <p className='text-sm ml-auto w-7 h-7 flex justify-center items-center p-1 bg-blue-300 font-semibold rounded-full text-white'>{conv.unseenMsg}</p>
                </div>
              );
            })
          }
        </div>
      </div>
      {/*Edit user details*/}
      {editUserOpen && (
        <EditUserDetails onClose={() => setEditUserOpen(false)} user={user} />
      )}
      {/* search user */}
      {
      openSearchUser && (
        <SearchUser onClose={() => setOpenSearchUser(false)}/>
      )
      }
    </div>
  );
}

export default Sidebar
