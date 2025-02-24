"use client"
import Todo from './Todo'
import axios from 'axios';
import React, { useEffect } from 'react'
import useSWR from 'swr';

const TodoList = () => {
  const fetcher = async (url) => {
    return await axios.get(url)
    .then(r => r.data)
  }
  const { data, error, isLoading } = useSWR('/api/auth/get/todos', fetcher);
  return (
    <div className='w-full h-full flex flex-col mt-5'>
        {isLoading ? (<p>loading...</p>): (
          data.todos.map((item, index) => (
            <Todo item={item} key={index} />
          ))
        )}
    </div>
  )
}

export default TodoList