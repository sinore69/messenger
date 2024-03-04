import ChatHistory from "@/components/ChatHistory";
import ConversationBanner from "@/components/ConversationBanner";
import InputMessage from "@/components/InputMessage";
import getChats from "@/server actions/getChats";
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
  if (chatId === "none" || userid !== curruser?.username)
    return (
      <div className="flex bg-white w-5/6 justify-center pt-56 border-l-2 border-deluge-300 text-xl">
        <div className="text-deluge-300">Start a conversation</div>
      </div>
    );
  const res = await getChats(userid, partnerid).catch((err) =>
    console.log(err)
  );
  if (res)
    return (
      <div className="flex w-5/6 border-l-2 border-deluge-300">
        <div className="flex flex-col bg-white w-full">
          <ConversationBanner chatid={chatId} />
          <ChatHistory conversation={res} chatId={chatId} />
          <div className="h-10 w-full bg-white"></div>
        </div>
        <div className="absolute bottom-0 bg-white">
          <InputMessage chatid={chatId} />
        </div>
      </div>
    );
}

export default page;
