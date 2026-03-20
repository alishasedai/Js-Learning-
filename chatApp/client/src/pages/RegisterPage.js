import React, {useState} from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router";
import uploadFile from '../helpers/uploadFile';
import axios from "axios";
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const [data,setData] = useState({
    name : "",
    email : "",
    password : "",
    profile_pic : ""
  })
  const [uploadPhoto, setUploadPhoto] = useState("")
  const handleOnChange = (e) => {
    const {name,value} = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name] : value
      }
    })
  }


  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];

    const response = await uploadFile(file); // rename (important)
    console.log("Upload photo", response);

    setUploadPhoto(file);

    setData((prev) => ({
      ...prev,
      profile_pic: response?.url,
    }));
  };

  const handleClearUploadPhoto = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setUploadPhoto(null)
    
  }
    const handleSubmit = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const URL = `${process.env.REACT_APP_BACKEND_URL}/api/register`;
      console.log(process.env.REACT_APP_BACKEND_URL)
      try {
        const response = await axios.post(URL, data);
        console.log("response",response)
        toast.success(response.data.message)
      } catch (err) {
        toast.error(err?.response?.data?.message)
        console.log("error",err)
      }
    };
    console.log(data)
  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4 mx-auto">
        <h3>Welcome to Chat App!</h3>
        <form className="grid gap-4 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="enter your name"
              value={data.name}
              onChange={handleOnChange}
              required
              className="bg-slate-100 px-2 py-1 focus:outline-blue-300 h-10"
            />
          </div>
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
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              value={data.password}
              onChange={handleOnChange}
              required
              className="bg-slate-100 px-2 py-1 focus:outline-blue-300 h-10"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="profile_pic">
              Photo:
              <div className="h-14 bg-slate-200 flex justify-center items-center border hover:border-blue-300 rounded">
                <p className="text-sm">
                  {uploadPhoto?.name
                    ? uploadPhoto?.name
                    : "Upload Profile Photo"}
                </p>
               { uploadPhoto?.name && (
                <button
                  className="text-lg ml-2 hover:text-red-500"
                  onClick={handleClearUploadPhoto}
                >
                  <IoCloseSharp />
                </button>
                )}
              </div>
            </label>
            <input
              type="file"
              name="profile_pic"
              id="profile_pic"
              onChange={handleUploadPhoto}
              className="bg-slate-100 px-2 py-1 focus:outline-blue-300 h-10 hidden cursor-pointer"
            />
          </div>
          <button className='bg-blue-300 text-lg px-4 py-1 hover:bg-blue-400 rounded mt-4 font-bold text-white leading-relaxed tracking-wide'>
            Register
          </button>
        </form>
        <p className='my-3 text-center' >Already have an account ? <Link to={"/email"} className='hover:text-blue-400  font-semibold'>Login</Link></p>
      </div>
    </div>
  );
}

export default RegisterPage
