import React from 'react'

function page() {
  return (
      <div className='h-screen w-screen bg-gray-400 flex flex-row'>
        <div className=' w-2/12 flex justify-center'>chatlist</div>
        <div className=' w-10/12 bg-gray-300'> chat</div>
      </div>
  )
}

export default page