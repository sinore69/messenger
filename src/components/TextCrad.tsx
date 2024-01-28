import React from "react";
import { chats } from "@/utils/types";
import { chatid } from "@/utils/types";
interface props extends chatid {
  chat: chats;
}
const TextCrad: React.FC<props> = ({ chat, chatId }) => {
  const [userid,partnerid]=chatId.split('--');
  if(chat.senderId===userid)
  return (<div className="bg-red-300 p-1 ">
    <div className="">
    {chat.content}
    </div>
  </div>)
  return (
    <div>
      {chat.content}
    </div>
  );
};

export default TextCrad;
