
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import incomingRequests from '@/server actions/incomingRequests';
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
      <section key={item.id}>{item.from_id}</section>
    )
  }
    </>
  )
}

export default FriendsList
