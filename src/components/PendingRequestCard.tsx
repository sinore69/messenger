import getUserList from "@/server actions/getUserList";
import { User } from "@clerk/nextjs/server";
import { useQuery } from "@tanstack/react-query";
import acceptRequest from "@/server actions/acceptRequest";
import declineRequests from "@/server actions/declineRequests";

async function getUser(senderId: string) {
  const user = await getUserList(senderId);
  return user as User[];
}
function PendingRequestCard(props: any) {
  const user = useQuery({
    queryKey: ["userdata", props.id],
    queryFn: async () => {
      const data = await getUser(props.id);
      return data;
    },
  });
  if (user.data)
    return (
      <>
        {user.data.map((item: User) => (
          <div key={item.id} className="flex flex-row gap-x-4">
            <div >{item.username}</div>
            <div className="flex flex-row gap-x-2">
              <button onClick={() => acceptRequest(item.username!)}>acc</button>
              <button onClick={() => declineRequests(item.username!)}>
                dec
              </button>
            </div>
          </div>
        ))}
      </>
    );
}

export default PendingRequestCard;
