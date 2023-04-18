import React from 'react'

function Loader() {
  return (
      <div className='flex items-center justify-center'>
          <div className='animate-ping '>
                <h1 className='text-green-800 rounded-[50%] md:ml-2 bg-gray-400 h-8 border-2 w-8'>  </h1>
          </div>
    </div>
  )
}

export default Loader