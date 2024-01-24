import InputMessage from '@/components/InputMessage'
import React from 'react'

interface pageprops{
  params:{
    chatId:string,
  }
}

function page({params}:pageprops) {
  const {chatId}=params
  return (
    <div className='flex justify-center bg-gray-300 w-5/6'>
      <InputMessage chatid={chatId} />
    </div>
  )
}

export default page