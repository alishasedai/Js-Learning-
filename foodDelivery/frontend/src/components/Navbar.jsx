import React, { useContext, useState } from 'react'
import { assets, icons } from '../assets/assests';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { StoreContext } from '../context/StoreContext';
import {useNavigate} from "react-router-dom";
const Navbar = ({setShowLogIn}) => {

const [menu,setMenu] =useState("home");
const[open,setOpen] = useState(false);

const {getTotalCartAmount,token,setToken}= useContext(StoreContext);
const navigate = useNavigate();
const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
}
  return (
    <div className="flex sm:flex-row md:flex-row relative lg:flex-row w-full justify-between items-center">
      <Link to="/">
        <img
          src={assets.logo}
          className="h-20 w-40"
          onClick={() => setOpen((prev) => !prev)}
          alt=""
        />
      </Link>

      <ul
        className={`
    ${open ? "flex" : "hidden"}
    md:flex
    flex-col
    md:flex-row
    absolute
    md:static
    left-0
    top-0
    w-full
    md:w-auto
    text-gray-900
    gap-8
    justify-center
    items-center
    p-5
    bg-[#cce8e3]
    md:text-gray-900
    md:bg-transparent
    md:text-xl
    text-lg
  `}
      >
        <MdClose
          className="md:hidden absolute top-0 bg-green-900 rounded-full right-0 text-white p-1"
          onClick={() => setOpen((prev) => !prev)}
          size={30}
        />
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`cursor-pointer  ${menu === "home" ? "border-b-2 border-gray-600 text-red-800" : ""}`}
        >
          Home
        </Link>
        <li
          onClick={() => setMenu("menu")}
          className={`cursor-pointer  ${menu === "menu" ? "border-b-2 border-gray-600 text-red-800" : ""}`}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={`cursor-pointer  ${menu === "mobile-app" ? "border-b-2 border-gray-600 text-red-800" : ""}`}
        >
          Mobile-app
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={`cursor-pointer   ${menu === "contact" ? "border-b-2 border-gray-600 text-red-800" : ""}`}
        >
          Contact us
        </li>
      </ul>
      <div className="flex gap-4 items-center justify-center">
        <FaSearch size={20} />

        {/* Cart Icon */}
        <Link to="/cart">
          {" "}
          <FaShoppingCart size={22} />
        </Link>
        {!token ? (
          <button
            onClick={() => {
              setShowLogIn(true);
            }}
            className="bg-transparent border border-gray-400 h-9 w-20 rounded-lg text-md md:text-xl cursor-pointer hover:bg-yellow-100"
          >
            Sign In
          </button>
        ) : (
          <div className="relative group bg-green-800 ">
            <img className="w-10 h-10" src={icons.profile_icon} alt="" />
            <ul className="absolute border-2 border-red-300 hidden right-0 z-[1] group-hover:flex items-start flex-col bg-white shadow-lg rounded-md mt-1 px-8 py-3 ">
              <li onClick={() => navigate("//myorders")} className="flex gap-1 cursor-pointer mr-3 hover:text-red-800">
                <img className="w-8 h-8" src={icons.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout} className="flex gap-2 mr-3 hover:text-red-800 cursor-pointer">
                <img className="w-8 h-6" src={icons.logout} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
