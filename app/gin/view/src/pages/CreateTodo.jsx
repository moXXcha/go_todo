import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const CreateTodo = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const submit = async (title, description) => {
        const {response, error} = await axios.post("/api/auth/create", {
          title: title,
          description: description,
        })
        navigate("/todo/summary")
        console.log(response, error)
    }
  return (
    <div className='w-4/5 mx-auto mt-20'>
      <button className='w-20 h-8 border rounded-md hover:bg-black hover:text-white transition-all' onClick={() => {navigate("/todo/summary")}}>back</button>
      <div className='w-3/5 mx-auto'>
        <p className="text-xl">title</p>
        <input type="text" className="border w-full rounded-md h-10 p-2" placeholder='title' onChange={(e) => setTitle(e.target.value)} />
        <p className="text-xl">description</p>
        <textarea className="border w-full h-72 rounded-md p-2" placeholder='description' onChange={(e) => setDescription(e.target.value)} />
        <button className="cursor-pointer border h-10 w-20 rounded-md hover:bg-black hover:text-white transition-all" onClick={() => submit(title, description)}>submit</button>
      </div>
    </div>
  )
}

export default CreateTodo