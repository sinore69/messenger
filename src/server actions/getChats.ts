"use server";
import prisma from "@/orm/prisma";
async function getChats(userId: string, partnerId: string) {
  try {
    const res = await prisma.chats.findMany({
      where: {
        OR: [
          {
            senderId: userId,
            recieverId: partnerId,
          },
          {
            senderId: partnerId,
            recieverId: userId,
          },
        ],
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default getChats;
