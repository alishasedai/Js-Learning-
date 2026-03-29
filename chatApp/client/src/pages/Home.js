import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { logout, setUser } from '../redux/userSlice'
import Sidebar from '../components/Sidebar'
import logo from "../assets/images.png"

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch()
  const naviagate = useNavigate()
  const location = useLocation()

  console.log("Redux user",user)


  const fetchUserDetails = async () => {
    try{
      const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`;
      const response = await axios({
        
        url : URL,
        withCredentials : true
      })
      dispatch(setUser(response.data.data))
      if(response.data.data.logout){
        dispatch(logout)
        naviagate("/email")
      }
      console.log("Current user details",response)

    }catch(err){
      console.log("error",err)
    }
  }

  useEffect(() => {
    fetchUserDetails()
  },[])
  
console.log("location", location);
const basepath = location.pathname === "/"
  return (
    <div className="grid grid-cols-[300px,1fr] h-screen max-h-screen">
      <section className={`bg-white ${!basepath && "hidden"} lg:block`}>
        <Sidebar />
      </section>
      
      {/* message components*/}
      <section className={`${basepath && "hidden"}`}>
        <Outlet />
      </section>


      <div className={`justify-center items-center flex-col gap-2 ${!basepath ? "hidden" : "lg:flex"} `}>
        <div>
          <img 
          src={logo}
          width={250}
          alt='logo'/>
        </div>
        <p className='text-lg mt-2 text-slate-400'>Select user to send the message</p>
      </div>
    </div>
  );
}



export default Home
