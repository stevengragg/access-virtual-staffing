import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const options = {
      method: "POST",
      url: `${process.env.AUTH0_ISSUER_BASE_URL}/dbconnections/change_password`,
      headers: { "Content-Type": "application/json" },
      data: {
        client_id: process.env.AUTH0_CLIENT_ID,
        email: email,
        connection: "Username-Password-Authentication",
      },
    };

    const response = await axios.request(options);

    return NextResponse.json({
      message: "Password reset email sent",
      data: response.data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Failed to request password change",
        details: error.response?.data || error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}
