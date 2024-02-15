import { useQuery } from "@tanstack/react-query";
import React from "react";
import incomingRequests from "@/server actions/incomingRequests";
import PendingRequestCard from "./PendingRequestCard";
import { friendrequest } from "@/utils/types";
import Skeleton from "./Skeleton";
async function getFriendRequest() {
  const response = await incomingRequests();
  return response;
}

const PendingFriendsList = () => {
  const requests = useQuery({
    queryKey: ["requests"],
    queryFn: getFriendRequest,
  });
  if (requests.isLoading) return <Skeleton></Skeleton>;
  if (requests.data?.length !== 0) {
    return (
      <div className="">
        {requests.data?.map((item: friendrequest) => (
          <section key={item.id}>
            <PendingRequestCard id={item.senderId}></PendingRequestCard>
          </section>
        ))}
      </div>
    );
  }
  return (
    <div className="h-10 p-4 text-xl font-semibold text-deluge-300">
      No pending requests
    </div>
  );
};

export default PendingFriendsList;
