import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'

const Home = () => {
  const user = useSelector(state => state.user);
  console.log("Redux user",user)

  const fetchUserDetails = async () => {
    try{
      const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`;
      const response = await axios({
        
        url : URL,
        withCredentials : true
      })
      console.log("Current user details",response)

    }catch(err){
      console.log("error",err)
    }
  }

  useEffect(() => {
    fetchUserDetails()
  },[])
  return (
    <div>
      Home Page
      {/* message components*/}
      <section>
    <Outlet/>
      </section>
    </div>
  )
}



export default Home
