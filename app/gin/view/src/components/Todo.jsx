import React from 'react'
import { useNavigate } from 'react-router-dom'
const Todo = (props) => {
  const navigate = useNavigate()
  return (
    <div className='border flex w-full h-16 rounded-md mb-5 items-center p-3 hover:bg-black hover:text-white transition-all' onClick={() => {navigate(`/todo/${props.item.ID}`)}}>
        <p className='text-l'>{props.item.Title}</p>
        <p className="text-l ml-auto">{props.item.Description}</p>
    </div>
  )
}

export default Todo