"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCrypto } from "@/server actions/getCrypto";
function Bots() {
  const response = useQuery({
    queryKey: ["crypto"],
    queryFn: async () => getCrypto(),
  });
  return <div>{response.data}</div>;
}

export default Bots;
