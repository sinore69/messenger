'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import getNewChats from '@/server actions/getNewChats'
function NewChat() {
  const chats=useQuery({
    queryKey:['chats'],
    queryFn:async()=> getNewChats()
  })
  if(chats.isLoading)
  return <div>loading</div>
  return (
    <div>{
      chats.data?.[0].friendOf
    }</div>
  )
}

export default NewChat