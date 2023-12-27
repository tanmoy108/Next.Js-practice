import { NextResponse } from "next/server";
import { info } from "@/utils/db";
export async function GET(request, content) {
  console.log(content.params.id);
  const data = await info.filter(
    (item) => item.id === Number(content.params.id)
  );
  return NextResponse.json({ result: data, success: true });
}
export async function PUT(request, content) {
  try {
    const id = Number(content.params.id);
    const payload = await request.json();
    payload.id = id;
    console.log(payload);
    if (!payload.name || !payload.age) {
      return NextResponse.json({ result: "error", success: false });
    }
    return NextResponse.json({ result: payload, success: true });
  } catch (error) {
    return NextResponse.json({ result: error, success: false });
  }
}
