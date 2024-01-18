import React from "react";
import ActiveChat from "@/components/ActiveChat";
import NewChat from "@/components/NewChat";
function page() {
  return (
    <div className="h-screen w-screen bg-gray-400 flex flex-row">
      <div className=" w-2/12 flex flex-col items-center">
        <div className="">ActiveChat</div>
        <ActiveChat></ActiveChat>
        <NewChat></NewChat>

      </div>
      <div className=" w-10/12 bg-gray-300"> chat</div>
    </div>
  );
}

export default page;
