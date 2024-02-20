"use server";

import { botMessage } from "@/utils/types";

export async function getCryptoData(data: botMessage) {
  const res = await fetch(
    `https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${data.message.toUpperCase()}`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CRYPTOKEY!,
      },
    }
  );
  const ans = await res.json();
  const result = JSON.stringify(ans);
  const parse = JSON.parse(result);
  console.log(parse);
  return parse;
}
