import { NextRequest, NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";
import { clientuser } from "@/_actions/clientuser";
import { currentUser } from "@clerk/nextjs";
import sendRequest from "@/server actions/sendRequest";

export async function GET(request: NextRequest, { params }: any) {
  const { username } = params;
  const curruser = await currentUser();
  try {
    const user = await clerkClient.users.getUserList({
      username: username,
    });

    if (curruser && user[0].id === curruser.id)
      return NextResponse.json("you can't add yourself");

    const userjson = clientuser(user[0]);
    if (curruser && userjson) {
      const res = await sendRequest(userjson.username!, curruser.username!);
      return NextResponse.json(res);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json("user not found");
  }
  return NextResponse.json("some error has occured");
}
