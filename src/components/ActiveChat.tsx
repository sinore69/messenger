import React from "react";
import { useQuery } from "@tanstack/react-query";
import getChats from "@/server actions/getChats";
function ActiveChat() {
  const chatHistory = () => {
    const chats = useQuery({
      queryKey: ["chats"],
      queryFn: async () => {
        getChats;
      },
    });
  };
  return <div></div>;
}

export default ActiveChat;
