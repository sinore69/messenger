"use server";
import prisma from "@/orm/prisma";
import { auth } from "@clerk/nextjs";
async function incomingRequests() {
  const { userId } = auth();
  if (userId) {
    const req = await prisma.friendrequest.findMany({
      where: {
        recieverId: userId,
      },
    });
    return req;
  }
}

export default incomingRequests;
