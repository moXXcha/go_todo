import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [is409Error, setIs409Error] = useState(false)
    const navigate = useNavigate()
    const submit = (email, password) => {
        axios.post("/api/create/acount", {
            email: email,
            password: password,
        }).then(function (response) {
          if(response.status === 200) {
            navigate("/home/test")
          }
        }).catch(function (error) {
          if(error.status === 409) {
            setIs409Error(true)
          }else {
            console.log(error.status)
          }
        })
    }
  return (
    <div className='w-1/2 flex flex-col mx-auto mt-32'>
        <h1 className='text-xl font-bold mb-5'>create acount</h1>
        {is409Error ? <p className="text-red-600">allready created acound</p> : <></>}
        <p>email</p>
        <input type="text" className="border h-10 rounded-md mb-10 p-2" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <p>password</p>
        <input type="password" className='border h-10 rounded-md mb-10 p-2' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <button className='border w-32 h-10 rounded-md mx-auto hover:bg-black hover:text-white transition-all' onClick={() => submit(email, password)}>送信</button>
    </div>
  )
}

export default CreateUser