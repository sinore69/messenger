"use server"
import { messages } from "@/utils/types";
import prisma from "@/orm/prisma";
async function conversation(data:messages) {
    try {
        const res=await prisma.chats.create({
            data:{
                senderId:data.senderId,
                recieverId:data.recieverId,
                content:data.text,
                delivered:false,
            }
        })
    } catch (error) {
        console.log(error)
    }
    
}

export default conversation