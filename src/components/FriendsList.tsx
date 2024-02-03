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
      <>
        <div>loading...</div>
      </>
    );
  if (requests.data?.length !== 0) {
    return (
      <>
        {requests.data?.map((item: any) => (
          <section key={item.id}>
            <PendingRequestCard id={item.senderId}></PendingRequestCard>
          </section>
        ))}
      </>
    );
  }

  return (
    <>
      <div>no pending requests</div>
    </>
  );
};

export default PendingFriendsList;
