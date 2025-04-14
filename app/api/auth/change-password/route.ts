import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getSession } from "@auth0/nextjs-auth0";
import { db } from "@/database";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession(req, NextResponse.next());

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Please login.", ok: false },
        { status: 401 }
      );
    }
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required", message: "Email is required", ok: false },
        { status: 400 }
      );
    }

    const user = await db.query.users.findFirst({
      where: eq(users.userId, session.user.sub),
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
          message: "User does not exist.",
          ok: false,
        },
        { status: 404 }
      );
    }

    if (user.provider === "federated") {
      return NextResponse.json(
        {
          error: "Social Login",
          message:
            "You are a using social login. Resetting password is not applicable.",
          ok: false,
        },
        { status: 403 }
      );
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

    await axios.request(options);

    return NextResponse.json({
      message: "Password reset email sent",
      ok: true,
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
