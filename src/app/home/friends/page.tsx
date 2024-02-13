"use client";
import React from "react";
import Searchfriend from "@/form/Searchfriend";
import PendingFriendsList from "@/components/FriendsList";
function page() {
  return (
    <div className="flex flex-row h-screen w-screen bg-white">
      <div className="">
        <div className="h-screen w-60">
          <div className="h-10 bg-deluge-200 p-2 text-l font-semibold">
            Pending requests
          </div>
          <PendingFriendsList />
        </div>
      </div>
      <div className="flex flex-row justify-center w-10/12 bg-white border-l-2 border-deluge-300">
        <div className="flex flex-col">
          <div>Add a Friend</div>
          <div className="w-96 h-52 ">
            <Searchfriend />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
