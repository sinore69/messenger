import { useQuery } from "@tanstack/react-query";
import React from "react";
import incomingRequests from "@/server actions/incomingRequests";
import PendingRequestCard from "./PendingRequestCard";

async function getFriendRequest() {
  const response = await incomingRequests();
  return response;
}

const PendingFriendsList = () => {
  const requests = useQuery({
    queryKey: ["requests"],
    queryFn: getFriendRequest,
  });
  if (requests.isLoading)
    return (
      <div>
        <div className="flex items-center space-x-1">
          <div className="animate-pulse bg-deluge-300 h-10 w-10 rounded-full"></div>
          <div className="space-y-1">
            <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[180px]">
              {" "}
            </div>
            <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[170px]">
              {" "}
            </div>
          </div>
        </div>
      </div>
    );
  if (requests.data?.length !== 0) {
    return (
      <div className="">
        {requests.data?.map((item: any) => (
          <section key={item.id}>
            <PendingRequestCard id={item.senderId}></PendingRequestCard>
          </section>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="h-10 p-4 text-l">No pending requests</div>
    </>
  );
};

export default PendingFriendsList;
