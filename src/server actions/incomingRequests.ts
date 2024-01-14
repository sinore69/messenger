'use server'
import prisma from "@/orm/prisma"
import { auth } from "@clerk/nextjs";
async function incomingRequests() {
    const {userId}=auth();
    if(userId){
        const req=await prisma.friendrequest.findMany({
            where:{
                to_id:userId
            }
        })
        //console.log(req);
        return req;
    }

}

export default incomingRequests