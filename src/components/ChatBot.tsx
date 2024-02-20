"use client";
import React from "react";
import { useState } from "react";
import { cryptoBotMenu } from "@/BotIntro/cryptoBot";
import { botMessage } from "@/utils/types";
import BotTextCard from "./BotTextCard";
import BotTextInput from "./BotTextInput";
interface props {
  userName: string;
  botName: string;
}

function ChatBot({ userName, botName }: props) {
  const [conversation, setConversation] = useState<botMessage[]>([
    cryptoBotMenu,
  ]);
  const updateState = (newValue: botMessage) => {
    setConversation((prev) => [...prev, newValue]);
  };
  return (
    <div>
      <div>
        {conversation.map((item: botMessage) => (
          <BotTextCard key={item.sender} content={item}></BotTextCard>
        ))}
      </div>
      <div className="absolute bottom-0">
        <BotTextInput userName={userName} botName={botName} updateState={updateState} />
      </div>
    </div>
  );
}

export default ChatBot;
