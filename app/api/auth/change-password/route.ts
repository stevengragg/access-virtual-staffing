import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const response = await fetch(
      `https://${process.env.AUTH0_BASE_URL}/dbconnections/change_password`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: process.env.AUTH0_CLIENT_ID,
          email: email,
          connection: "Username-Password-Authentication", // Change this if needed
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to request password change", details: result },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: "Password reset email sent" });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", details: error },
      { status: 500 }
    );
  }
}
