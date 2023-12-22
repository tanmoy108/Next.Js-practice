import { db } from "@/utils/db.js";
import { NextResponse } from "next/server";

export function GET(request,props) {
    console.log(db,props.params.id)
    const slok = db.filter((item)=>item.id === Number(props.params.id))
    return NextResponse.json(
        {
            result: slok,
            success: true,
        },
        { status: 200 }
    );
}
