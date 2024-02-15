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
          <div
            key={item.id}
            className="flex flex-row gap-x-20 bg-deluge-100 h-11 rounded-md p-1 hover:bg-deluge-200"
          >
            <div className="font-semibold">{item.username}</div>
            <div className="flex flex-row gap-x-3">
              <button
                onClick={() => acceptRequest(item.username!)}
                className="bg-deluge-300 p-1 rounded-md h-8"
              >
                acc
              </button>
              <button
                onClick={() => declineRequests(item.username!)}
                className="bg-deluge-300 p-1 rounded-md h-8"
              >
                dec
              </button>
            </div>
          </div>
        ))}
      </>
    );
}

export default PendingRequestCard;
