import React from "react";

function Skeleton() {
  return (
    <div>
      <div className="flex items-center space-x-1">
        <div className="animate-pulse bg-deluge-300 h-10 w-10 rounded-full"></div>
        <div className="space-y-1">
          <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[180px]">
            {" "}
          </div>
          <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[170px]">
            {" "}
          </div>
        </div>
      </div>
      <div className="h-1"></div>
      <div className="flex items-center space-x-1">
        <div className="animate-pulse bg-deluge-300 h-10 w-10 rounded-full"></div>
        <div className="space-y-1">
          <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[160px]">
            {" "}
          </div>
          <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[150px]">
            {" "}
          </div>
        </div>
      </div>
      <div className="h-1"></div>
      <div className="flex items-center space-x-1">
        <div className="animate-pulse bg-deluge-300 h-10 w-10 rounded-full"></div>
        <div className="space-y-1">
          <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[140px]">
            {" "}
          </div>
          <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[130px]">
            {" "}
          </div>
        </div>
      </div>
      <div className="h-1"></div>
      <div className="flex items-center space-x-1">
        <div className="animate-pulse bg-deluge-300 h-10 w-10 rounded-full"></div>
        <div className="space-y-1">
          <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[120px]">
            {" "}
          </div>
          <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[110px]">
            {" "}
          </div>
        </div>
      </div>
      <div className="h-1"></div>
      <div className="flex items-center space-x-1">
        <div className="animate-pulse bg-deluge-300 h-10 w-10 rounded-full"></div>
        <div className="space-y-1">
          <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[100px]">
            {" "}
          </div>
          <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[90px]">
            {" "}
          </div>
        </div>
      </div>
      <div className="h-1"></div>
      <div className="flex items-center space-x-1">
        <div className="animate-pulse bg-deluge-300 h-10 w-10 rounded-full"></div>
        <div className="space-y-1">
          <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[80px]">
            {" "}
          </div>
          <div className="animate-pulse rounded-md bg-deluge-300 h-4 w-[70px]">
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
