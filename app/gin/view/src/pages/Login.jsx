import React, { useEffect, useState } from 'react'
import axios from "axios"

function Login() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("")

    const submit = (userId, password) => {
        axios.post('/api/login', {
            userId: userId,
            password: password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <div>
        <input type="text" className="border" placeholder='userIid' onChange={(e) => {setUserId(e.target.value)}} />
        <input type="password" className="border" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => submit(userId, password)}>ログイン</button>
    </div>
  )
}

export default Login