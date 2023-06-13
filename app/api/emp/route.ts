import { main } from "@/app/api/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const emp = await main("select * from emp");
  return NextResponse.json({ emp });
}
