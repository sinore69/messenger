import React from "react";
import { chats } from "@/utils/types";
import { chatid } from "@/utils/types";
interface props extends chatid {
  chat: chats;
}
const TextCrad: React.FC<props> = ({ chat, chatId }) => {
  return (
    <div>
      {chat.content}
      {chatId}
    </div>
  );
};

export default TextCrad;
