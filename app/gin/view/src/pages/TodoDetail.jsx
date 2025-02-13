import React from 'react'
import { useParams } from 'react-router-dom'

const TodoDetai = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <div className='w-4/5 mx-auto mt-8'>
      <button className='w-20 h-8 border rounded-md hover:bg-black hover:text-white transition-all'>戻る</button>
      <div className="w-3/5 mx-auto">
        <div className='flex mt-8'>
          <h1 className='text-2xl'>title</h1>
          <button className='ml-auto w-20 h-8 border rounded-md hover:bg-black hover:text-white transition-all'>編集</button>
        </div>
        <p className="mt-4">description</p>
      </div>
    </div>
  )
}

export default TodoDetai