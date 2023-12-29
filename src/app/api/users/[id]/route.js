import { users } from "@/lib/model/users";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    await mongoose.connect(process.env.DBCONNECT)
    const data = await users.findById(params.id)
    return NextResponse.json({ result: data, success: true })
}

export async function PUT(request,{params}){
    const payload = await request.json();
    await mongoose.connect(process.env.DBCONNECT)
    const data = await users.findOneAndUpdate({_id:params.id},payload,{upsert:true})
    return NextResponse.json({ result: data, success: true })
}
export async function DELETE(request,{params}){
    await mongoose.connect(process.env.DBCONNECT)
    const data = await users.deleteOne({_id:params.id})
    return NextResponse.json({ result: data, success: true })
}