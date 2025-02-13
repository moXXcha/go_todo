"use client"
import React, { useEffect } from 'react'
import Todo from './Todo'
import { useGetAllTodo } from '../hooks/useGetAllTodo'

const TodoList = () => {
    const todos =  useGetAllTodo()
  return (
    <div className='w-full h-full flex flex-col mt-5'>
        {todos ? (<p>test</p>): (<p>sinu</p>)}
        <Todo />
        <Todo />
    </div>
  )
}

export default TodoList