import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import uploadFile from "../helpers/uploadFile";
import axios from "axios";
import toast from "react-hot-toast";
import { FaRegCircleUser } from "react-icons/fa6";

const CheckEmail = () => {

  const [data, setData] = useState({
    
    email: ""  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`;
    console.log(process.env.REACT_APP_BACKEND_URL);
    try {
      const response = await axios.post(URL, data);
      console.log("response", response);
      toast.success(response.data.message);
      if (response.data.success) {
        setData({
          email: ""
        });
        navigate("/password");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      console.log("error", err);
    }
  };
  console.log(data);
  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-sm rounded overflow-hidden p-4 mx-auto">
        <div className="w-fit mx-auto mb-2">
          <FaRegCircleUser  size={50}/>
        </div>
        <h3>Welcome to Chat App!</h3>
        <form className="grid gap-4 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              value={data.email}
              onChange={handleOnChange}
              required
              className="bg-slate-100 px-2 py-1 focus:outline-blue-300 h-10"
            />
          </div>

          <button className="bg-blue-300 text-lg px-4 py-1 hover:bg-blue-400 rounded mt-4 font-bold text-white leading-relaxed tracking-wide">
            Register
          </button>
        </form>
        <p className="my-3 text-center">
         New User?{" "}
          <Link to={"/register"} className="hover:text-blue-400  font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};


export default CheckEmail;
