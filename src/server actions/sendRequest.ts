"use server";
import prisma from "@/orm/prisma";
async function sendRequest(friendId: string, currUserId: string) {
  const duplicate = await prisma.friendrequest.findFirst({
    where: {
      senderId: currUserId,
      recieverId: friendId,
    },
  });
  if (duplicate == null)
    await prisma.friendrequest.create({
      data: {
        senderId: currUserId,
        recieverId: friendId,
      },
    });
}

export default sendRequest;
