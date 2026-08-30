import React, { useContext, useEffect, useState } from 'react'
import { icons } from '../assets/assests';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const LoginForm = ({setShowLogIn}) => {
  const {url,setToken} = useContext(StoreContext);

    const [currState,setCurrState]= useState("Login");
    const [data,setData] = useState({
      name : "",
      email: "",
      password: ""
    })

    const onChangeHandle = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data => ({...data,[name] : value}))
    }
    const onLogin = async (event) => {
      event.preventDefault();
       console.log("ON LOGIN CALLED");
       let newUrl = url;
      if(currState === "Login"){
        newUrl += "/api/user/userLogin"
      }else{
        newUrl += "/api/user/register"
      }
      const response = await axios.post(newUrl, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data)
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogIn(false)
        console.log(response);
      } 
      else{
        alert(response.data.message);
      }
      

    }
    useEffect(() => {
      console.log(data);
     
    },[data])
  return (
    <div className='absolute z-10 w-full h-full bg-black/50 grid '>
      <form onSubmit={onLogin} action="" className='place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6.25 px-7.5 py-6.5 rounded-lg text-[14px] '>
        <div className="loginTitle flex gap-3 text-black font-black text-xl justify-between">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogIn(false)} src={icons.closeIcon} className='bg-red-700 w-7 cursor-pointer h-7' alt="" />
        </div>
        <div className=' flex flex-col gap-2'>
          {currState === "Login" ? <></> : 
          <input className='border-2 w-full p-2 rounded-sm' type="text" placeholder='Your Name' required name="name" onChange={onChangeHandle} value={data.name} id="" />}
          <input className='border-2 w-full p-2 rounded-sm' type="email" placeholder='Your Email' name="email" onChange={onChangeHandle} value={data.email} id="" />
          <input className='border-2 w-full p-2 rounded-sm' type="password" placeholder='Password'
          required name="password" onChange={onChangeHandle} value={data.password} id="" />
        </div>
        <button type='submit' className='bg-[#ff6347] -mt-2 text-lg text-white rounded-sm p-2 font-bold'>{currState === "Sign Up" ? "Create an account" : "Login"}</button>
        <div className="login-popupCondition flex justify-center items-center gap-2 -mt-8">
          <input type="checkbox" required name="" id="" />
          <p className='mt-6'>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
       {currState === "Login" ?  <p>Create a new account? <span className='cursor-pointer text-[#ff6347] font-bold' onClick={() => setCurrState("Sign Up")}>Click here.</span></p> : <p>Alrready have an account? <span className='cursor-pointer text-[#ff6347] font-bold' onClick={() => setCurrState("Login")}>Login here</span></p>}
       

      </form>
    </div>
  )
}

export default LoginForm
