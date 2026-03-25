import React, { useState } from 'react'
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

const Sidebar = () => {
  const user = useSelector(state => state?.user);
  const [editUserOpen, setEditUserOpen] = useState(false)
  const [allUser,setAllUser] = useState([])
  const [openSearchUser,setOpenSearchUser] = useState(true)
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
          <NavLink
            title="add friend"
            onClick={() => {
              setOpenSearchUser(true)
            }}
            className={({ isActive }) =>
              `w-12 h-12 hover:bg-slate-300 rounded flex justify-center items-center cursor-pointer ${isActive && "bg-slate-400"}`
            }
          >
            <FaUserPlus size={25} />
          </NavLink>
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
