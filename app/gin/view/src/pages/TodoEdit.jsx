import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'

const TodoEdit = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()
    const fetcher = async (url) => {
      return await axios.get(url, {params: {
        id: id
      }})
      .then(r => r.data)
    }
    const { data, error, isLoading } = useSWR(`/api/auth/get/todo/detail`, fetcher);

    useEffect(() => {
        if(data) {
            setTitle(data.todo.Title)
            setDescription(data.todo.Description)
        }
    }, [data])


    const edit = () => {
      axios.patch("/api/auth/edit/todo", {
        id: data.todo.ID,
        title: title,
        description: description,
      }).then(
        navigate(`/todo/detail/${data.todo.ID}`)
      ).catch(function(error) {
        console.log(error)
      })
    }
  return (
    <div className='w-4/5 mx-auto mt-20'>
      <button className='w-20 h-8 border rounded-md hover:bg-black hover:text-white transition-all' onClick={() => {navigate(`/todo/detail/${data.todo.ID}`)}}>back</button>
        <div className="w-3/5 mx-auto">
        <div className='flex mt-8'>
          <input type="text" className='text-l w-full border rounded-md px-2 mr-2' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <button className='ml-auto w-20 h-8 border rounded-md hover:bg-black hover:text-white transition-all' onClick={() => {edit()}}>edit</button>
        </div>
        <textarea className="mt-4 w-full h-60 border rounded-md p-2" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
     
    </div>
  )
}

export default TodoEdit