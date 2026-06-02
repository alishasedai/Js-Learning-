import React from 'react'
import { Outlet, Route,Link } from 'react-router-dom'
import Phone from './Phone'
import Laptop from './Laptop'

const Products = () => {
  return (
    <div>
      <h2>Product List</h2>
      <Link to="phone">Phone</Link> |
      <Link to="laptop">Laptop</Link>
        <Outlet />
    </div>
  )
}

export default Products
