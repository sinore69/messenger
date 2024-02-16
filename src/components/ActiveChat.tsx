"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import chatList from "@/server actions/chatList";
import { newchat } from "@/utils/types";
import Link from "next/link";
import Skeleton from "./Skeleton";
function NewChat() {
  const chats = useQuery({
    queryKey: ["chats"],
    queryFn: async () => chatList(),
  });
  if (chats.isLoading) return <Skeleton></Skeleton>;
  return (
    <div>
      {chats.data?.map((item: newchat) => (
        <div key={item.id}>
          <Link
            className="flex lg:w-60 sm:w-48 h-12 font-semibold text-xl hover:bg-deluge-100 p-2 rounded-md focus:bg-deluge-100 border border-deluge-200"
            href={`/home/chats/${item.friendOf}--${item.username}`}
          >
            {item.username}
          </Link>
          <div className="h-0.5"></div>
        </div>
      ))}
    </div>
  );
}

export default NewChat;
