import connectDB from "@/lib/mongodb";
import Topic from "@/model/model";
import { NextResponse } from "next/server";


type RequestBody = {
    title: string;
    description: string;
}
export const POST = async(req: Request)=>{
    const {title,description}: RequestBody = await req.json()
    await connectDB()
    await Topic.create({title,description})
    return NextResponse.json({message: "Topic Created"},{status: 201})
}

export const GET = async () => {
    await connectDB();
    const topics = await Topic.find()
    return NextResponse.json({ topics });
}

export const DELETE =async (req: any) => {
    const id = req.nextUrl.searchParams.get("id")
    await connectDB()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message: "Deleted"}, {status: 200})
}