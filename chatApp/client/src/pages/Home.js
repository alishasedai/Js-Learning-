import axios from 'axios'
import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
  const fetchUserDetails = async () => {
    try{
      const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`;
      const response = await axios({

      })

    }catch(err){

    }
  }
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
