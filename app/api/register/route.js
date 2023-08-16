import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();


export async function POST(request) { 
    const { firstName, lastName, email, country, education, interestArea } = await request.json()
    
    const user = await prisma.userinfo.create({
        data: {
            firstName,
            lastName,
            email,
            country,
            education,
            interestArea,
        },
    });
    return NextResponse.json({message: "User Created Successfully", user})
}