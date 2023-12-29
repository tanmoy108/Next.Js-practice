import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");
  if (!file) {
    return NextResponse.json({ result: "image not found", success: false });
  }
  const type = data.get("type");
  const number = data.get("number");
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/${file.name}`;
  try {
    console.log("Type:", type);
    console.log("Number:", number);

    await writeFile(path, buffer);

    return NextResponse.json({ result: "File uploaded", success: true });
  } catch (error) {
    console.error("Error handling file upload:", error);
    return NextResponse.json({
      result: "Error uploading file or processing form data",
      success: false,
    });
  }
}
