import TodoList from '../components/TodoList'
import axios from 'axios';
import React, { useEffect } from 'react'
import useSWR from 'swr';

const TodoIndex = () => {
  return (
    <div className='mt-16 w-1/2 mx-auto'>
        <p className='text-2xl'>Todo app</p>
        <TodoList />
    </div>
  )
}

export default TodoIndex