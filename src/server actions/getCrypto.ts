"use server";
export async function getCrypto() {
  const res = await fetch("https://api.coincap.io/v2/assets/bitcoin");
  const ans = await res.json();
  const data = JSON.stringify(ans);
  return data;
}
