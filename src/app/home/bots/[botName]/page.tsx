import BotNameBanner from "@/components/BotNameBanner";
import ChatBot from "@/components/ChatBot";
import React from "react";
interface pageprops {
  params: {
    botName: string;
  };
}
function Bots({ params }: pageprops) {
  const bot = params.botName.replace("%20", " ");
  return (
    <div className="xl:w-full  border-l-2 border-deluge-300 h-screen flex flex-col">
      <BotNameBanner botName={bot} />
      <div className="h-full w-full bg-blue-100 overflow-auto">
        <ChatBot />
      </div>
    </div>
  );
}

export default Bots;
