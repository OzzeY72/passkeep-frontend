import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest){
    const res = NextResponse.next()

    res.headers.append('Access-Control-Allow-Credentials', "true")
    res.headers.append('Access-Control-Allow-Origin', '*') // замініть це вашим фактичним джерелом
    res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
    res.headers.append(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
    )

    return res;
}
export const config = {
    //matcher: '/api/:path*',
    matcher: '/',
}