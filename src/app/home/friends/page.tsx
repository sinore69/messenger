"use client";
import React from "react";
import Searchfriend from "@/form/Searchfriend";
import PendingFriendsList from "@/components/FriendsList";
function page() {
  return (
    <div className="flex flex-row h-screen w-screen bg-gray-400">
      <div className="">
        <div className="h-screen w-60">
          pending requests
          <PendingFriendsList />
        </div>
      </div>
      <div className="flex flex-row justify-center w-10/12 bg-white">
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
