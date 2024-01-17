import getUserList from '@/server actions/getUserList'
import { User } from '@clerk/nextjs/server';
import { useQuery } from '@tanstack/react-query';
import accreptRequest from '@/server actions/accreptRequest';

async function getUser(userId: string) {
  const user = await getUserList(userId);
  return user;
}
function PendingRequestCard(props: any) {
  const user = useQuery({
    queryKey: ['userdata', props.id],
    queryFn: async () => {
      const data = await getUser(props.id);
      const jsonData = JSON.parse(data)
      return jsonData as User;
    }
  })
  if(user.data)
  return (
    <div className='pt-2 pl-2 flex flex-row gap-x-20'>
      <div>
      <div>
        {user.data?.username}
      </div>
      <div className='flex gap-x-1 flex-row'>
        <div>
          {user.data?.firstName}
        </div>
        <div>
          {user.data?.lastName}
        </div>
      </div>
      </div>
      <div className='flex flex-row gap-x-2'>
          <button onClick={()=>accreptRequest(user.data?.username!)}>acc</button>
          <button>dec</button>
        </div>
        
    </div>
  )
}

export default PendingRequestCard