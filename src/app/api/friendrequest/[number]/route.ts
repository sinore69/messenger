import { NextRequest, NextResponse } from "next/server";
import prisma from "@/orm/prisma";
import { clerkClient } from "@clerk/nextjs";
import { clientuser } from "@/_actions/clientuser";
export async function GET(request:NextRequest,{params}:any) {
    const {number}=params;
    const phone_number=[number];
    try {
        const user=await clerkClient.users.getUserList({
            phoneNumber:phone_number
        })
        const userjson=clientuser(user[0]);
        return NextResponse.json(userjson);
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