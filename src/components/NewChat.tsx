'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import getNewChats from '@/server actions/getNewChats'
import { newchat } from '@/utils/types'
function NewChat() {
  const chats=useQuery({
    queryKey:['chats'],
    queryFn:async()=> getNewChats()
  })
  if(chats.isLoading)
  return <div>loading</div>
  return (
    <div>{
      chats.data?.map((item:newchat)=><div>{item.username}</div>)
    }</div>
  )
}

export default NewChat