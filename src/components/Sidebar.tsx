import React from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FaUserFriends } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { BiLogoMeta } from "react-icons/bi";

function Sidebar() {
  return (
    <div>
      <div className="h-screen w-14 bg-deluge-200 border-r-2 border-deluge-300">
        <div className="h-10 w-14 bg-deluge-300">
          <BiLogoMeta className="pl-1" size={40} />
        </div>
        <div className="flex flex-col gap-y-2 pt-3">
          <Link
            href={"/home/chats/none"}
            className="focus:bg-deluge-300 rounded-full"
          >
            <IoMdChatbubbles className="pl-2" size={40} />
          </Link>
          <Link
            href={"/home/friends"}
            className="focus:bg-deluge-300 rounded-full"
          >
            <FaUserFriends className="pl-2" size={40} />
          </Link>
        </div>
        <div className="absolute bottom-2 left-2">
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
