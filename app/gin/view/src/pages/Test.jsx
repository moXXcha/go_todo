import axios from 'axios';
import React, { useState } from 'react'

const Test = () => {

   const submit = () => {
      axios.post('/api/auth/logout', {
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
        <input type="text" className="border" onChange={(e) => setText(e.target.value)} />
        <button className="border" onClick={() => submit()}>submit</button>
    </div>
  )
}

export default Test