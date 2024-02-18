"use client";
import React from "react";
import { useState } from "react";
import { cryptoBotMenu } from "@/BotIntro/cryptoBot";
import { botMessage } from "@/utils/types";
import BotTextCard from "./BotTextCard";
function ChatBot() {
  const [conversation, setConversation] = useState<botMessage[]>([
    cryptoBotMenu,
  ]);
  return (
    <div>
      {conversation.map((item: botMessage) => (
        <BotTextCard key={item.sender} content={item}></BotTextCard>
      ))}
    </div>
  );
}

export default ChatBot;
