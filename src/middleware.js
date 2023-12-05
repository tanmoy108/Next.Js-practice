import { NextResponse } from "next/server"

const middleware = (request) => {
    console.log(request.nextUrl.pathname)
//   if(request.nextUrl.pathname != "/login")
//   {
    return NextResponse.redirect(new URL("/login",request.url))
//   }
}

export const config ={
    matcher:["/gita/chapters/:path*","/about/:path*"]
}

export default middleware