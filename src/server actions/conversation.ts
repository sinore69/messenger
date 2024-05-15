"use server";
import { messages } from "@/utils/types";
import prisma from "@/orm/prisma";
import { pusherServer } from "@/utils/pusher";
import axios from "axios";
async function conversation(data: messages) {
  let encryptedText:string
  try {
    encryptedText=await axios.post("http://127.0.0.1:5000/encrypt",data.text)
  } catch (error) {
    encryptedText=""
    console.log("encryption server offline")
  }
  if(encryptedText==""){
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
      await pusherServer.trigger(channel, "newMessages", res);
    } catch (error) {
      console.log(error);
    }
  }else{
    try {
      const res = await prisma.chats.create({
        data: {
          senderId: data.senderId,
          recieverId: data.recieverId,
          content: encryptedText,
          delivered: false,
        },
      });
      const channel = [data.senderId, data.recieverId].sort().toString();
      await pusherServer.trigger(channel, "newMessages", res);
    } catch (error) {
      console.log(error);
    }
  }
  
}

export default conversation;
