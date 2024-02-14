"use server";
import { clerkClient } from "@clerk/nextjs";
async function getUserList(userName: string) {
  try {
    const user = await clerkClient.users.getUserList({ username: [userName] });
    const res = JSON.stringify(user);
    const ans=JSON.parse(res);
    return ans;
  } catch (error) {
    console.log(error);
  }
}

export default getUserList;
