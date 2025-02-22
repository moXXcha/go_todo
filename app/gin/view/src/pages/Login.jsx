import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [responseStatus, setResponseStatus] = useState(0)

    const submit = (email, password) => {
        axios.post('/api/login', {
          withCredentials: true,
            email: email,
            password: password
          })
          .then(function (response) {
            setResponseStatus(response.status)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const navigate = useNavigate()
    const testOnClick = () => {
      navigate("/test")
    }
  return (
    <div className='w-1/2 mx-auto flex flex-col mt-32'>
        <h1 className='text-xl font-bold mb-5'>login</h1>
        <p>email</p>
        <input type="text" className="border h-10 rounded-md mb-5 p-3" placeholder='userIid' onChange={(e) => {setEmail(e.target.value)}} />
        <p>password</p>
        <input type="password" className="border h-10 rounded-md mb-5 p-3" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <button className='border w-32 h-10 rounded-md mx-auto hover:bg-black hover:text-white transition-all' onClick={() => submit(email, password)}>ログイン</button>
        {responseStatus === 200?  <button className='border w-32 h-10 cursor-pointer' onClick={() => testOnClick()}>遷移</button> : <></>}
    </div>
  )
}

export default Login