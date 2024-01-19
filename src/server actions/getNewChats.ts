"use server";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/orm/prisma";
async function getNewChats() {
  const user = await currentUser();
  const res = await prisma.user.findFirst({
    where: {
      username: user?.username!,
    },
    include: {
      friendsWith: true,
    },
  });
  return res?.friendsWith;
}

export default getNewChats;
