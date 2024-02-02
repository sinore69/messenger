import React from "react";

function ConversationBanner(chatId: { chatid: string }) {
  const [userid, partnerid] = chatId.chatid.split("--");
  return <div className="h-11">{partnerid}</div>;
}

export default ConversationBanner;
