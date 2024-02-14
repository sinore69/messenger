"use server";
import prisma from "@/orm/prisma";
import { currentUser } from "@clerk/nextjs";
async function incomingRequests() {
  const user = await currentUser();
  if (user) {
    const req = await prisma.friendrequest.findMany({
      where: {
        recieverId: user.username!,
      },
    });
    return req;
  }
}

export default incomingRequests;
