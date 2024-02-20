"use server";

import { botMessage } from "@/utils/types";
import parser from "@/server actions/parser";
export async function getCryptoData(data: botMessage) {
  const query = data.message.toUpperCase().split(" ");
  const res = await fetch(
    `https://sandbox-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${query[0]}`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CRYPTOKEY!,
      },
    }
  );
  const ans = await res.json();
  const result = JSON.stringify(ans);
  const response: botMessage = {
    message: parser(result, query[0]),
    sender: "cryptoBot",
    reciever: "",
  };
  return response;
}
