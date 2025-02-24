import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'

const TodoDetai = () => {
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
      console.log(data)
    }, [data])
  return (
    <div className='w-4/5 mx-auto mt-8'>
      <button className='w-20 h-8 border rounded-md hover:bg-black hover:text-white transition-all' onClick={() => {navigate("/todo/summary")}}>戻る</button>
      {isLoading? (
        <p>loading...</p>
      ) : (
        <div className="w-3/5 mx-auto">
        <div className='flex mt-8'>
          <h1 className='text-2xl'>{data.todo.Title}</h1>
          <button className='ml-auto w-20 h-8 border rounded-md hover:bg-black hover:text-white transition-all'>編集</button>
        </div>
        <p className="mt-4">{data.todo.Description}</p>
      </div>
      )}
    </div>
  )
}

export default TodoDetai