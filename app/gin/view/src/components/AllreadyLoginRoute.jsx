import React from 'react'
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const AllreadyLoginRoute = ({ children }) => {
  const [sessionCookie, setCookie] = useCookies(["session"])
  if(sessionCookie.session) {
    return <Navigate to="/allready-login" />
  }
  return children;
}

export default AllreadyLoginRoute