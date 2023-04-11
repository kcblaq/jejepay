import React, { useContext } from 'react';
import {  Navigate, useLocation } from 'react-router-dom';
import { myContext } from '../../context';


function ProtectedRoute({children}) {
    
    const location = useLocation();
    const {
    isLoggedIn,
    setIsLoggedIn,
    user,
    } = useContext(myContext)
    console.log(isLoggedIn)
  if(!user.at){
    return (<Navigate to="/" state={{from: location}} replace /> )
  } else {
    return children
  }
}

export default ProtectedRoute