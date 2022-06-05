
import { NextResponse } from 'next/server'

export default function middleware(request) {
   if(request.url === "http://localhost:3000/books/preview"){
        return NextResponse.redirect(new URL('/', request.url))
   }
    
}