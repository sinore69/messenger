import { botMessage } from "@/utils/types";
import React from "react";
interface props {
  content: botMessage;
}
const BotTextCard: React.FC<props> = ({ content }) => {
  if (content.sender.endsWith("Bot"))
    return (
      <div className="flex flex-col p-1">
        <div className="flex flex-row gap-x-80 md:gap-x-40 sm:gap-x-0">
          <div className="w-96 xl:w-96 sm:w-[390px]">
            <div className=" bg-deluge-100 p-2 rounded-lg float-left text-justify">
              {content.message}
            </div>
          </div>
          <div className="xl:w-96 text-right"></div>
        </div>
      </div>
    );
  return (
    <div className="flex flex-col p-1">
      <div className="flex flex-row xl:gap-x-80 lg:gap-x-60">
        <div className="w-96 xl:w-96 lg:w-56 md:w-72 "></div>
        <div className="w-96 xl:w-96">
          <div className="bg-deluge-300 text-justify rounded-lg p-2 float-right">
            {content.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotTextCard;
