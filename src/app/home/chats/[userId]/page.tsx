import InputMessage from '@/components/InputMessage'
import React from 'react'

function page({params}:any) {
  const {userId}=params
  return (
    <div className='flex justify-center bg-gray-300 w-5/6'>
      
      <InputMessage />
    </div>
  )
}

export default page