import { NextRequest,NextResponse } from "next/server";
//import { PrismaClient } from "@prisma/client/extension";
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export async function POST(req: NextRequest) {
    
    const body = await req.json();
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });
    console.log(user.id);
    return NextResponse.json({ message: "Signed up" });
    // console.log(req);
    // const body = await req.json();
    // // should add zod validation here
   
    // const user = await client.user.create({
    //     data: {
    //         username: body.username,
    //         password: body.password
    //     }
    // });

    // console.log(user.id);

    // return Response.json({ message: "Signed up" });
}


export function GET()
{
    return Response.json({
        email:"devx@gmail.com",
        name:"devx"
    })
}

// export async function POST(req:NextRequest)
// {
//     const body = await req.json();
//     console.log(body)
//     return Response.json({
//         message:"You are logged in"
//     })

// }


///postgres://avnadmin:AVNS_GFK3wnuCm_ZjbLeS4ej@pg-1dbe10af-sujitbhongle-3fbe.a.aivencloud.com:13487/defaultdb?sslmode=require

