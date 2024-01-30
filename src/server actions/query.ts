import getChats from "./getChats";
export default async function initialMessages(
  userId: string,
  partnerId: string
) {
  const history = await getChats(userId, partnerId)
    .then()
    .catch((error) => console.log(error));
  return history;
}
