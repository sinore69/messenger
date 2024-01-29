import React from "react";
import { chats } from "@/utils/types";
import { chatid } from "@/utils/types";
interface props extends chatid {
  chat: chats;
}
const TextCrad: React.FC<props> = ({ chat, chatId }) => {
  const [userid] = chatId.split("--");
  if (chat.senderId === userid)
    return (
      <div className="flex flex-col">
        <div className="flex flex-row gap-x-80 ">
          <div className=" w-96"></div>
          <div className=" w-96 p-1 bg-red-300 text-left">{chat.content}</div>
        </div>
        <div className="h-1"></div>
      </div>
    );
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-x-80 ">
        <div className=" w-96">{chat.content}</div>
        <div className="w-96 text-right p-1"></div>
      </div>
      <div className="h-1"></div>
    </div>
  );
};

export default TextCrad;
