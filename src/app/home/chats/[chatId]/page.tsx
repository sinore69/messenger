import ChatHistory from "@/components/ChatHistory";
import ConversationBanner from "@/components/ConversationBanner";
import InputMessage from "@/components/InputMessage";
import React from "react";

interface pageprops {
  params: {
    chatId: string;
  };
}

function page({ params }: pageprops) {
  const { chatId } = params;
  if (chatId === "none")
    return (
      <div className="flex bg-gray-300 w-5/6 justify-center pt-56">
        <div>select a chat</div>
      </div>
    );
  return (
    <div className="flex justify-center bg-gray-300 w-5/6">
      <div className="flex justify-item-center flex-col bg-slate-400 w-full">
        <ConversationBanner chatid={chatId}/>
        <ChatHistory chatid={chatId}/>
      </div>
      <div className="absolute left-2/4 bottom-1">
        <InputMessage chatid={chatId} />
      </div>
    </div>
  );
}

export default page;
