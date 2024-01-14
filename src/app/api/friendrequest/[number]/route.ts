import { NextRequest, NextResponse } from "next/server";
import prisma from "@/orm/prisma";
import { clerkClient } from "@clerk/nextjs";
import { clientuser } from "@/_actions/clientuser";
import { currentUser } from "@clerk/nextjs";
import sendRequest from "@/server actions/sendRequest";

export async function GET(request:NextRequest,{params}:any) {
    const {number}=params;
    const phone_number=[number];
    const curruser=await currentUser();
    try {
        const user=await clerkClient.users.getUserList({
            phoneNumber:phone_number
        })
        if(curruser && user[0].id===curruser.id)
        return NextResponse.json({message:"you can't add yourself"})
        const userjson=clientuser(user[0]);
        await sendRequest(userjson.id,curruser?.id);
        return NextResponse.json("request sent");
    } catch (error) {
    }
    return NextResponse.json({message:"no user found"});
}


export async function POST(req:NextRequest) {
    await prisma.friendRequest.create({
        data:{
            from_id:'abcd',
            to_id:'abcd'
        }
    })
    return NextResponse.json({message:"ok"})
}