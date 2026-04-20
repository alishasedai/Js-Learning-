import React from 'react'
import { Link ,Outlet } from 'react-router-dom'


const Product = () => {
  return (
    <div>
      <h2>Product page</h2>
      <Link to={"laptop"}>Laptop |  </Link>
      <Link to={"phone"}>Phone</Link>

      <Outlet />
    </div>
    
  )
}

export default Product
