import React from 'react'

function page({params}:any) {
  const {userId}=params
  return (
    <div className='flex justify-center bg-gray-300 w-5/6'>
      <div>{userId}</div>
    </div>
  )
}

export default page