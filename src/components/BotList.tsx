import Link from "next/link";
import React from "react";

function page() {
  const botlist = ["Crypto Bot"];
  return (
    <div>
      {botlist.map((item: string) => (
        <div key={item}>
          <Link
            className="flex lg:w-60 sm:w-48 h-12 font-semibold text-xl hover:bg-deluge-100 p-2 rounded-md focus:bg-deluge-100 border border-deluge-200"
            href={`/home/bots/${item}`}
          >
            {item}
          </Link>
          <div className="h-0.5"></div>
        </div>
      ))}
    </div>
  );
}

export default page;
