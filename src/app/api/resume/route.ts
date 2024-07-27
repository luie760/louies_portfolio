import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

//Return a list of my basic resume information
export async function GET() {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const {data, error} = await supabase.from("resume").select("*");
    return NextResponse.json(data);
    //return NextResponse.json({
    //    hello: "world",
    //});
}