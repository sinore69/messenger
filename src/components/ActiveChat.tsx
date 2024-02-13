"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import chatList from "@/server actions/chatList";
import { newchat } from "@/utils/types";
import Link from "next/link";
function NewChat() {
  const chats = useQuery({
    queryKey: ["chats"],
    queryFn: async () => chatList(),
  });
  if (chats.isLoading)
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
  return (
    <div>
      {chats.data?.map((item: newchat) => (
        <Link
          className="flex w-60 h-12 font-semibold text-xl hover:bg-deluge-100 p-2 rounded-md focus:bg-deluge-100"
          key={item.id}
          href={`/home/chats/${item.friendOf}--${item.username}`}
        >
          {item.username}
        </Link>
      ))}
    </div>
  );
}

export default NewChat;
