import React from 'react'
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import Avatar from "./Avatar"
import { useDispatch, useSelector } from "react-redux";


const Sidebar = () => {
  const user = useSelector(state => state?.user)
  return (
    <div className="w-full h-full">
      <div className="bg-slate-200 flex flex-col justify-between rounded-tr-lg rounded-br-lg w-12 h-full py-5">
        <div>
          <div
            className="w-12 h-12 hover:bg-slate-300 rounded flex justify-center items-center cursor-pointer"
            title="chat"
          >
            <IoChatbubbleEllipses size={20} />
          </div>
          <NavLink
            title="add friend"
            className={({ isActive }) =>
              `w-12 h-12 hover:bg-slate-300 rounded flex justify-center items-center cursor-pointer ${isActive && "bg-yellow-600"}`
            }
          >
            <FaUserPlus size={20} />
          </NavLink>
        </div>
        <div>
          <button className="font-normal">
            <Avatar width={50} height={50} name={user.name} />
          </button>
          <button
            title="logout"
            className="w-12 h-12 hover:bg-slate-300 rounded flex justify-center items-center cursor-pointer"
          >
            <span className="-ml-2">
              <CgLogOut size={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
