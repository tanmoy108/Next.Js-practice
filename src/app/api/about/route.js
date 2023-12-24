import { info } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ result: info, success: true });
}

export async function POST(request,content){
  const payload = await request.json();
  console.log(payload);
  return NextResponse.json({ result: info, success: true });
}