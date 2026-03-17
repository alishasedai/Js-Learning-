import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
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
