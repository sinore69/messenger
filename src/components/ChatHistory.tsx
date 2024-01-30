"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import getChats from "@/server actions/getChats";
import { chatid, chats } from "@/utils/types";
import TextCrad from "./TextCrad";
import { useEffect, useState } from "react";
import { pusherClient } from "@/utils/pusher";
import initialMessages from "@/server actions/query";
import { FC } from "react";
interface pageprops extends chatid{
  conversation:chats[]|void,
}
const ChatHistory:React.FC<pageprops> =({conversation,chatId}) =>{
  //const [userid, partnerid] = chatId.chatid.split("--");
  // const history=useQuery({
  //   queryKey: ["conversation"],
  //   queryFn: async () => getChats(userid, partnerid),
  // })
  //const [conversation,setConversation]=useState<chats>();
  // useEffect(()=>{
  //   getChats(userid,partnerid).then((res)=>{});
  // },[])
  // const channel = [userid, partnerid].sort().toString();
  /*useEffect(() => {
    pusherClient.subscribe(channel);
    const handler = (conversation: chats) => {
    };
    pusherClient.bind("newMessages", handler);
    return () => {
      pusherClient.unsubscribe(channel);
      pusherClient.unbind("newMessages", handler);
    };
  }, []);*/
  return (
    <div className=" pl-1 pt-1 flex bg-gray-300 h-full w-full overflow-auto">
      <div>
        {conversation?.map((item: chats) => (
          <TextCrad key={item.id} chat={item} chatId={chatId} />
        ))}
      </div>
    </div>
  );
}

export default ChatHistory;
