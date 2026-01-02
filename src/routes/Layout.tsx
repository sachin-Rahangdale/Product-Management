import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div>Layout</div>
    <Outlet/>
    <ul>
        <li>
          <Link to ={'/'}>Home</Link>
        </li>
        <li>
          <Link to ={'/add'}> Add Product</Link>
        </li>
        <li>
          <Link to ={'/edit'}> Edit Product</Link>
        </li>
        <li>
          <Link to ={'/show'}> show Product</Link>
        </li>
      </ul>
    </>
  )
}

export default Layout