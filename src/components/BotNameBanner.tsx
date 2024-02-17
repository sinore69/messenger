import React from "react";
interface pageprops {
  botName: string;
}
function BotNameBanner({ botName }: pageprops) {
  return (
    <div className="h-10 border border-deluge-300 border-x-2 border-y-2 font-semibold p-1 pl-2 bg-deluge-100">
      {botName}
    </div>
  );
}

export default BotNameBanner;
