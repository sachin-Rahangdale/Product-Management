import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const RequiredAuth = () => {
  const isAuthenticated= ()=>{
    return !!localStorage.getItem('user');//!! it converts anything to boolean value

  }
  return isAuthenticated() ? <Outlet/> : <Navigate to ={"/login"}/>
}
export default RequiredAuth