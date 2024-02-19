import BotNameBanner from "@/components/BotNameBanner";
import ChatBot from "@/components/ChatBot";
import React from "react";
import { currentUser } from "@clerk/nextjs";
interface pageprops {
  params: {
    botName: string;
  };
}
async function Bots({ params }: pageprops) {
  const bot = params.botName.replace("%20", " ");
  if (bot === "none")
    return (
      <div className="xl:w-full  border-l-2 border-deluge-300 h-screen flex flex-col justify-center pl-96 text-2xl font-semibold text-deluge-300">
        Start a chat with your bot
      </div>
    );
    const userName=await currentUser();
    if(userName)
  return (
    <div className="xl:w-full  border-l-2 border-deluge-300 h-screen flex flex-col">
      <BotNameBanner botName={bot} />
      <div className="h-full w-full bg-blue-100 overflow-auto">
        <ChatBot userName={userName.username!}/>
      </div>
    </div>
  );
}

export default Bots;
