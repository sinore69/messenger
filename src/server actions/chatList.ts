"use server";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/orm/prisma";
async function chatList() {
  const user = await currentUser();
  const res = await prisma.user.findFirst({
    where: {
      username: user?.username!,
    },
    include: {
      friendsWith: true,
    },
  });
  if(res?.friendsWith===undefined)
  return []
  return res?.friendsWith;
}

export default chatList;
