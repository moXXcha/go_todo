import React, { useState } from 'react'
import axios from "axios"

const CreateTodo = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const submit = async (title, description) => {
        const {response, error} = await axios.post("/api/auth/create", {
          title: title,
          description: description
        })
        console.log(response, error)
    }
  return (
    <div className='w-1/2 mx-auto mt-20'>
        <p className="text-xl">title</p>
        <input type="text" className="border w-full rounded-md h-10 p-2" placeholder='title' onChange={(e) => setTitle(e.target.value)} />
        <p className="text-xl">description</p>
        <textarea className="border w-full h-72 rounded-md p-2" placeholder='description' onChange={(e) => setDescription(e.target.value)} />
        <button className="cursor-pointer border h-10 w-20 rounded-md hover:bg-black hover:text-white transition-all" onClick={() => submit(title, description)}>submit</button>
    </div>
  )
}

export default CreateTodo