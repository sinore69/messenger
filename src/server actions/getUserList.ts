'use server'
import { clerkClient } from '@clerk/nextjs'

async function getUserList(userId:string) {
  const list=await clerkClient.users.getUser(userId);
  return JSON.stringify(list);
}

export default getUserList