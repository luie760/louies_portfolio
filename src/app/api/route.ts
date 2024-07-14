import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const {data, error} = await supabase.from("resume").select("*");
    return NextResponse.json(data);
    //return NextResponse.json({
    //    hello: "world",
    //});
}

export async function POST(request: Request){
    const data = await request.json();
    return NextResponse.json({data});
}