'use server'
import prisma from '@/orm/prisma'
async function sendRequest(friendId:string,userId:string) {
  const duplicate=await prisma.friendrequest.findFirst({
    where:{
      to_id:userId
    }
  })
  if(duplicate==null)
    await prisma.friendrequest.create({
        data:{
            from_id:userId,
            to_id:friendId,
        },
      })
  
}

export default sendRequest