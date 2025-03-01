import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'

const TodoDetai = () => {
    const navigate = useNavigate()
    const { id } = useParams();

    // key を動的に設定することで、id が変わった時に自動的にリクエストが更新される
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    const { data, error, isLoading } = useSWR(id ? `/api/auth/get/todo/detail?id=${id}` : null, fetcher);
  return (
    <div className='w-4/5 mx-auto mt-20'>
      <button className='w-20 h-8 border rounded-md hover:bg-black hover:text-white transition-all' onClick={() => {navigate("/todo/summary")}}>back</button>
      {isLoading? (
        <p>loading...</p>
      ) : (
        <div className="w-3/5 mx-auto">
        <div className='flex mt-8'>
          <h1 className='text-2xl'>{data.todo.Title}</h1>
          <button className='ml-auto w-20 h-8 border rounded-md hover:bg-black hover:text-white transition-all' onClick={() => {navigate(`/todo/edit/${data.todo.ID}`)}}>edit</button>
        </div>
        <p className="mt-4">{data.todo.Description}</p>
      </div>
      )}
    </div>
  )
}

export default TodoDetai