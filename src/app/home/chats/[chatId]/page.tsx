import ChatHistory from "@/components/ChatHistory";
import ConversationBanner from "@/components/ConversationBanner";
import InputMessage from "@/components/InputMessage";
import getChats from "@/server actions/getChats";
import { chats } from "@/utils/types";
import { currentUser } from "@clerk/nextjs";
import React from "react";

interface pageprops {
  params: {
    chatId: string;
  };
}
async function page({ params }: pageprops) {
  const { chatId } = params;
  const curruser = await currentUser().catch((err) => console.log(err));
  const [userid, partnerid] = chatId.split("--");
  const res = await getChats(userid, partnerid).catch((err) =>
    console.log(err)
  );
  if (chatId === "none" || userid !== curruser?.username)
    return (
      <div className="flex bg-gray-300 w-5/6 justify-center pt-56">
        <div>select a chat</div>
      </div>
    );
  if (res)
    return (
      <div className="flex bg-gray-300 w-5/6">
        <div className="flex flex-col bg-martinique-500 w-full">
          <ConversationBanner chatid={chatId} />
          <ChatHistory conversation={res} chatId={chatId} />
          <div className="h-10 w-full bg-gray-300"></div>
        </div>
        <div className="absolute bottom-0 bg-red-300">
          <InputMessage chatid={chatId} />
        </div>
      </div>
    );
}

export default page;
