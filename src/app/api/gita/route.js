import {db} from "@/utils/db.js";
import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json(
    {
      result: db,
      success: true,
    },
    { status: 200 }
  );
}
