"use client";
import React from "react";
import Searchfriend from "@/form/Searchfriend";
import FriendsList from "@/components/FriendsList";

function page() {
  return (
    <div className="flex flex-row h-screen w-screen bg-gray-400">
      <div className="">
        <div className="h-screen w-60">
          friend list
          <FriendsList />
        </div>
      </div>
      <div className="flex flex-row justify-center w-10/12 bg-gray-300">
        <div className="flex flex-col">
          <div>friend request</div>
          <div>
            <Searchfriend></Searchfriend>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
