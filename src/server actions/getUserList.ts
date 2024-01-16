'use server'
import { clerkClient } from '@clerk/nextjs'


async function getUserList(userId:string) {
  try {
    const user=await clerkClient.users.getUser(userId)
    return JSON.stringify(user);
  } catch (error) {
    console.log(error)
    return "user data not found"
  }
}

export default getUserList