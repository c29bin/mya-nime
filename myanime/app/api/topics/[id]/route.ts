import connectDB from "@/lib/mongodb";
import Topic from "@/model/model";
import { NextResponse } from "next/server";



export const PUT =async (req: Request, {params}: any) => {
    const { id } = params;
    const {newTitle: title, newDescription: description} : any = await req.json()
    await connectDB()
    await Topic.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({message: "Topic Updated"}, {status: 200})
    
} 

export const GET = async (request: Request,{params}: any) => {
    const {id} = params
    await connectDB()
    const topic = await Topic.findOne({_id: id})
    return NextResponse.json({topic}, {status: 200})
}