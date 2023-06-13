import { main } from "@/app/api/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const dept = await main("select * from dept");
  return NextResponse.json({ dept });
}
