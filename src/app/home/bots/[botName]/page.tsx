import BotNameBanner from "@/components/BotNameBanner";
import React from "react";
interface pageprops {
  params: {
    botName: string;
  };
}
function Bots({ params }: pageprops) {
  const bot = params.botName.replace("%20", " ");
  return (
    <div className="xl:w-full  border-l-2 border-deluge-300">
      <BotNameBanner botName={bot} />
      {bot}
    </div>
  );
}

export default Bots;
