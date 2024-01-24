"use server"
import { messages } from "@/utils/types";
import prisma from "@/orm/prisma";
async function conversation(data:messages) {
    await prisma.chats.create({
        data:{
            senderId:data.senderId,
            recieverId:data.recieverId,
            content:data.text,
            delivered:false,
        }
    })
}

export default conversation