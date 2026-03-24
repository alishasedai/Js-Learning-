import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { logout, setUser } from '../redux/userSlice'
import Sidebar from '../components/Sidebar'

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
      if(response.data.logout){
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
    <div className="grid lg:grid-cols-[300px,1fr] h-screen max-h-screen">
      <section className={`bg-white ${!basepath && "hidden"}`}>
        <Sidebar />
      </section>
      {/* message components*/}
      <section className={`${basepath && "hidden"}`}>
        <Outlet />
      </section>
    </div>
  );
}



export default Home
