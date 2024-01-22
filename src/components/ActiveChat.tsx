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
  if (chats.isLoading) return <div>loading</div>;
  return (
    <div>
      {chats.data?.map((item: newchat) => (
        <Link
          className="bg-gray-300 flex w-56 h-12 font-bold "
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
