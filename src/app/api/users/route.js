import { users } from "@/lib/model/users";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(process.env.DBCONNECT);
    data = await users.find();
  } catch (error) {
    data = { success: false };
  }
  return NextResponse.json({ result: data, success: true });
}

export async function POST(request) {
  const payload = await request.json()
  let result = null;
  try {
    await mongoose.connect(process.env.DBCONNECT);
    const user = new users(payload);
    result = await user.save();
  } catch (error) {
    result = "error";
  }
  return NextResponse.json({ data: result });
}
