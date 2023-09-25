import { NextRequest, NextResponse } from "next/server";
import prisma from "@/orm/prisma";
export async function GET(req:NextRequest) {
    const data=await prisma.friendRequest.findMany({
        where:{
            id:1
        }
    }).then(data=>{
        console.log(data[0])
    })
    
return NextResponse.json('ok');
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