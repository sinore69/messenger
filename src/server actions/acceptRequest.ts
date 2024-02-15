"use server";
import { currentUser } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs";
import prisma from "@/orm/prisma";
import { User } from "@clerk/nextjs/server";
async function acceptRequest(userName: string) {
  try {
    const currUser = await currentUser();
    const senderId = await clerkClient.users.getUserList({
      username: [userName],
    });
    //check for duplicate (this logic block can be removed to improve performance)
    const duplicate = await prisma.user.findFirst({
      where: {
        username: currUser?.username!,
      },
      include: {
        friendsWith: {
          where: {
            username: senderId[0].username!,
          },
        },
      },
    });
    //if record does not exist
    if (duplicate == null) {
      const [res1, res2] = await Promise.all([
        currentUserSide(currUser, senderId),
        recieverSide(currUser, senderId),
      ]);
    }
    //remove friend request from database
    if (currUser)
      await prisma.friendrequest
        .deleteMany({
          where: {
            recieverId: currUser.username!,
            senderId: senderId[0].username!,
          },
        })
        .catch((err) => {
          console.log(err);
        });
  } catch (error) {
    console.log(error);
  }
}
async function currentUserSide(currUser: User | null, senderId: User[]) {
  //create new friend from current user's side
  await prisma.user
    .create({
      data: {
        username: currUser?.username!,
        id: currUser?.id!,
        friendsWith: {
          create: {
            id: senderId[0].id!,
            username: senderId[0].username!,
          },
        },
      },
      include: {
        friendsWith: true,
      },
    })
    .catch((error) => {
      console.log(error);
    });
}
async function recieverSide(currUser: User | null, senderId: User[]) {
  //create friend from reciever's side
  await prisma.user
    .create({
      data: {
        id: senderId[0].id!,
        username: senderId[0].username!,
        friendsWith: {
          create: {
            id: currUser?.id!,
            username: currUser?.username!,
          },
        },
      },
      include: {
        friendsWith: true,
      },
    })
    .catch((error) => {
      console.log(error);
    });
}
export default acceptRequest;
