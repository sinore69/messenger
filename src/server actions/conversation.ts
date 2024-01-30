"use server";
import { messages } from "@/utils/types";
import prisma from "@/orm/prisma";
import { pusherServer } from "@/utils/pusher";
async function conversation(data: messages) {
  try {
    const res = await prisma.chats.create({
      data: {
        senderId: data.senderId,
        recieverId: data.recieverId,
        content: data.text,
        delivered: false,
      },
    });
    const channel = [data.senderId, data.recieverId].sort().toString();
    //console.log(channel);
    await pusherServer.trigger(channel, "newMessages", res);
  } catch (error) {
    console.log(error);
  }
}

export default conversation;
