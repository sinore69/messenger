import getUserList from '@/server actions/getUserList'
import { User } from '@clerk/nextjs/server';
import { useQuery } from '@tanstack/react-query';
async function getUser(userId:string) {
    const user=await getUserList(userId);
    return user;
}
function PendingRequestCard(props:any) {
   const user=useQuery({
    queryKey:['userdata',props.id],
    queryFn:async ()=>{
        const data=await getUser(props.id);
        const jsonData=JSON.parse(data)
        return jsonData as User;
    }
   })
   
   return(
    <div>
      {user.data?.firstName}
      {user.data?.lastName}
    </div>
   )
}

export default PendingRequestCard