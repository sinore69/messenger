"use server";
import prisma from "@/orm/prisma";
async function getChats(userId:string,partnerId:string) {
    try {
        const res=await prisma.chats.findMany({
            where:{
                senderId:userId||partnerId,
                recieverId:partnerId||userId,
            },
        })
        return res;
    } catch (error) {
        console.log(error)
    }
    
}

export default getChats;
