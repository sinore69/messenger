import prisma from '@/orm/prisma'
async function sendRequest(friendId:string,userId:string|undefined) {
  const duplicateRequest=await prisma.friendRequest.findFirst({
    where:{
        to_id:friendId
    }
  })
  if(duplicateRequest==null){
    await prisma.friendRequest.create({
        data:{
            from_id:userId!,
            to_id:friendId,
        },
      })
  }
  
}

export default sendRequest