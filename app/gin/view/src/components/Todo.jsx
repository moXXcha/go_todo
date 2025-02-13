import React from 'react'

const Todo = () => {
  return (
    <div className='border flex w-full h-16 rounded-md mb-5 items-center p-3 hover:bg-black hover:text-white transition-all'>
        <p className='text-xl'>title</p>
        <p className="text-l ml-auto">description</p>
    </div>
  )
}

export default Todo