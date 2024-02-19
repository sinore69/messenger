"use client";
import React from "react";
import { useState } from "react";
import { cryptoBotMenu } from "@/BotIntro/cryptoBot";
import { botMessage } from "@/utils/types";
import BotTextCard from "./BotTextCard";
import InputMessage from "./InputMessage";
interface props {
  userName: string;
}
function ChatBot({ userName }: props) {
  const [conversation, setConversation] = useState<botMessage[]>([
    cryptoBotMenu,
  ]);
  return (
    <div>
      <div>
        {conversation.map((item: botMessage) => (
          <BotTextCard key={item.sender} content={item}></BotTextCard>
        ))}
      </div>
      <div className="absolute bottom-0 bg-blue-100">
      </div>
    </div>
  );
}

export default ChatBot;
