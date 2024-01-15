
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import incomingRequests from '@/server actions/incomingRequests';
import RequestCard from './RequestCard';
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
        <RequestCard id={item.from_id}></RequestCard>
      </section>
    )
  }
    </>
  )
}

export default FriendsList
