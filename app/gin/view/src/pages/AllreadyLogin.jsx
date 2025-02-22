import React from 'react'
import { useCookies } from "react-cookie";

const AllreadyLogin = () => {
    const [sessionCookie, setCookie] = useCookies(["session"])
  return (
    <div>AllreadyLogin</div>
  )
}

export default AllreadyLogin