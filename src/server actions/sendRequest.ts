"use server";
import prisma from "@/orm/prisma";
async function sendRequest(friendId: string, currUserId: string) {
  const duplicate = await prisma.friendrequest.findFirst({
    where: {
      senderId: currUserId,
      recieverId: friendId,
    },
  });
  const alreadyFriend = await prisma.friends.findMany({
    where: {
      username: currUserId,
      friendOf: friendId,
    },
  });
  if (alreadyFriend == null && duplicate == null) {
    await prisma.friendrequest.create({
      data: {
        senderId: currUserId,
        recieverId: friendId,
      },
    });
    return "request sent!";
  }
  if (alreadyFriend !== null) return "user is in your friend list";
  if (duplicate !== null) return "user is yet to accept your request";
}

export default sendRequest;
