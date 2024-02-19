"use server";
export async function getCrypto() {
  const res = await fetch(
    "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CRYPTOKEY!,
      },
    }
  );
  const ans = await res.json();
  const data = JSON.stringify(ans);
  console.log(data);
  return data;
}
