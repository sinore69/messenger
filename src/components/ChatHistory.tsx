"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import getChats from "@/server actions/getChats";
import { chats } from "@/utils/types";
import TextCrad from "./TextCrad";
function ChatHistory(chatId: { chatid: string }) {
  const [userid, partnerid] = chatId.chatid.split("--");
  const history = useQuery({
    queryKey: ["history"],
    queryFn: async () => getChats(userid, partnerid),
  });
  return (
    <div className=" pl-2 flex bg-gray-300 h-full w-full">
      <div>
        {history.data?.map((item: chats) => (
          <TextCrad key={item.id} chat={item}></TextCrad>
        ))}
      </div>
    </div>
  );
}

export default ChatHistory;
