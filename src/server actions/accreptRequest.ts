'use server'
import { currentUser } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs";
import prisma from "@/orm/prisma";
async function accreptRequest(userName:string) {
    try {
    const currUser = await currentUser();
    const senderId=await clerkClient.users.getUserList({username:[userName]})
    //check for duplicate (this logic block can be removed to improve performance)
    const duplicate=await prisma.user.findFirst({
        where:{
            username:currUser?.username!,
        },
        include:{
            friends:{
                where:{
                    username:senderId[0].username!,
                }
            }
        }
    })
    //if record does not exist
    if(duplicate==null)
     await prisma.user.create({
        data:{
            username:currUser?.username!,
            id:currUser?.id!,
            friends:{
                create:{
                    id:senderId[0].id!,
                    username:senderId[0].username!,
                }
            }
        },
        include:{
            friends:true,
        }
    })
    //remove friend request from database
    if(currUser)
    await prisma.friendrequest.deleteMany({
        where:{
            recieverId:currUser.id!,
            senderId:senderId[0].id!,
        }
    })
} catch (error) {
        console.log(error)
}
    
}

export default accreptRequest