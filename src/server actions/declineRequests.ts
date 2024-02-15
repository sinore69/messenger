"use server";
import { currentUser } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs";
import prisma from "@/orm/prisma";

async function declineRequests(userName: string) {
  try {
    const currUser = await currentUser();
    const senderId = await clerkClient.users.getUserList({
      username: [userName],
    });
    if (currUser)
      await prisma.friendrequest.deleteMany({
        where: {
          recieverId: currUser.username!,
          senderId: senderId[0].username!,
        },
      });
  } catch (error) {
    console.log(error);
  }
}

export default declineRequests;
