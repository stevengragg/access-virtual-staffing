import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { db } from "@/database";
import { usersTable } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession(req, NextResponse.next());

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Please login.", ok: false },
        { status: 401 }
      );
    }

    // Fetch user data
    const user = await db
      .select({ isNewUser: usersTable.isNewUser })
      .from(usersTable)
      .where(eq(usersTable.userId, session.user.sub))
      .limit(1);

    if (!user.length) {
      return NextResponse.json(
        { error: "User not found", ok: false },
        { status: 404 }
      );
    }

    return NextResponse.json({
      isNewUser: user[0].isNewUser,
      ok: true,
    });
  } catch (error: any) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        ok: false,
        message: "Error fetching user data",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession(req, NextResponse.next());

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Please login.", ok: false },
        { status: 401 }
      );
    }

    // Update isNewUser to false in the database
    await db
      .update(usersTable)
      .set({ isNewUser: false })
      .where(eq(usersTable.userId, session.user.sub));

    return NextResponse.json({
      message: "User updated successfully!",
      ok: true,
    });
  } catch (error: any) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        ok: false,
        message: "Error updating user",
      },
      { status: 500 }
    );
  }
}
