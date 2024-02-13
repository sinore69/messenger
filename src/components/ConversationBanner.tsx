import React from "react";

function ConversationBanner(chatId: { chatid: string }) {
  const [userid, partnerid] = chatId.chatid.split("--");
  return (
    <div className="h-11 border border-deluge-300 border-x-2 border-y-2 font-semibold p-1 pl-2 bg-deluge-100">
      {partnerid}
    </div>
  );
}

export default ConversationBanner;
