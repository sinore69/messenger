import React from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
function Sidebar() {
  return (
    <div>
      <div className="h-screen w-14 bg-gray-200">
        <div className="h-14 w-14">logo</div>
        <div className="flex flex-col gap-y-4">
          <Link href={"/home/chats/none"}>chats</Link>
          <Link href={"/home/friends"}>friends</Link>
          <Link href={"/chats"}>profile</Link>
        </div>
        <div className="absolute bottom-2 left-2">
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
