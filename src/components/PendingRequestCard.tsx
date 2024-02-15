import getUserData from "@/server actions/getUserList";
import { User } from "@clerk/nextjs/server";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import acceptRequest from "@/server actions/acceptRequest";
import declineRequests from "@/server actions/declineRequests";
interface pageprops {
  id: string;
}
async function getUser(senderId: string) {
  const user = await getUserData(senderId);
  return user as User[];
}
function PendingRequestCard(props: pageprops) {
  const queryClient = useQueryClient();
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
                onClick={() =>
                  acceptRequest(item.username!).then((res) => {
                    queryClient.invalidateQueries({ queryKey: ["requests"] });
                  })
                }
                className="bg-deluge-300 p-1 rounded-md h-8"
              >
                acc
              </button>
              <button
                onClick={() =>
                  declineRequests(item.username!).then((res) => {
                    queryClient.invalidateQueries({ queryKey: ["requests"] });
                  })
                }
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
