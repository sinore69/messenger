import React, { use } from 'react'
import getUserList from '@/server actions/getUserList'
import { useQuery } from '@tanstack/react-query';

async function getUser(userId:string) {
    const user=await getUserList(userId);
    console.log(user)
}
function RequestCard(props:any) {
   const user=useQuery({
    queryKey:['userdata',props.id],
    queryFn:async ()=>{
        const data=await getUser(props.id);
        if(data==undefined)
        return [];
        return data;
    }
   })
    console.log(user.data);
  return (
    <div >{}</div>
  )
}

export default RequestCard