
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import incomingRequests from '@/server actions/incomingRequests';
import PendingRequestCard from './PendingRequestCard';

async function getFriendRequest() {
    const response=await incomingRequests();
    return response;
}

const FriendsList = () => {
  const requests=useQuery({
    queryKey:['requests'],
    queryFn:getFriendRequest
  })

  return (
  <>
    {
    requests.data?.map((item:any)=>
      <section key={item.id}>
        <PendingRequestCard id={item.senderId}></PendingRequestCard>
      </section>
    )
  }
    </>
  )
}

export default FriendsList
