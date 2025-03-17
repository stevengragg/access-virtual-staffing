import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

export async function POST(req: NextRequest) {
  const session = await getSession(req, NextResponse.next());
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  console.log(body);
  // Proceed with your logic for authenticated users
  return NextResponse.json({ message: "Authenticated access granted" });
}
