import TodoList from '../components/TodoList'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

const TodoIndex = () => {
  const [cookie, setCookie, removeCookie] = useCookies(['session']);
  const navigate = useNavigate()
  const submit = () => {
    axios.post('/api/auth/logout', {
    })
    .then(function () {
      removeCookie("session")
      navigate("/login")
    })
    .catch(function (error) {
      console.log(error);
    });
 }
  return (
    <div className='mt-16 w-1/2 mx-auto'>
      <div className='flex'>
        <p className='text-2xl'>Todo app</p>
        <div className='ml-auto space-x-2'>
          <button className='w-20 h-8 border rounded-md hover:bg-black hover:text-white transition-all' onClick={() => navigate("/create/todo")}>create</button>
          <button className='w-20 h-8 border rounded-md hover:bg-black hover:text-white transition-all' onClick={() => submit()}>logout</button>
        </div>
      </div>
        <TodoList />
    </div>
  )
}

export default TodoIndex