import { NextResponse } from "next/server";



export function middleware(request){
    // const token = request.cookies.get("jwt")?.value;
    // console.log(token,'tok')

    // if(!token){
    //     return NextResponse.redirect(
    //         new URL('/login', request.url)
    //     )
    // }
    // return NextResponse.next()
}

export const config = {
    matcher: ['/about','/category','/contact','/wishlist','/product/:id*']
}