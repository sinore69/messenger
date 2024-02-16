"use client";
import React from "react";
import { chatid, chats } from "@/utils/types";
import TextCrad from "./TextCrad";
import { pusherClient } from "@/utils/pusher";
import { useEffect, useState, useRef } from "react";
interface pageprops extends chatid {
  conversation: chats[];
}
const ChatHistory: React.FC<pageprops> = ({ conversation, chatId }) => {
  const [userid, partnerid] = chatId.split("--");
  const channel = [userid, partnerid].sort().toString();
  const [chat, setChat] = useState<chats[]>(conversation);
  const lastseen = useRef<HTMLDivElement>(null);
  useEffect(() => {
    pusherClient.subscribe(channel);
    const handler = (newMessage: chats) => {
      setChat((prev) => [...prev, newMessage]);
    };
    pusherClient.bind("newMessages", handler);
    lastseen.current?.scrollIntoView({ behavior: "instant" });
    return () => {
      pusherClient.unsubscribe(channel);
      pusherClient.unbind("newMessages", handler);
    };
  }, [chat,channel]);
  return (
    <div className=" pl-1 pt-1 flex bg-white h-full w-full overflow-auto">
      <div>
        {chat?.map((item: chats) => (
          <div key={item.id} ref={lastseen}>
            <TextCrad key={item.id} chat={item} chatId={chatId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
