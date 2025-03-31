import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { eq } from "drizzle-orm";

import { db } from "@/database";
import { notifications } from "@/database/schema/notifications";
import { users } from "@/database/schema/users";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession(req, NextResponse.next());

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Please login." },
        { status: 401 }
      );
    }

    // Find the user in the database
    const user = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.userId, session.user.sub))
      .limit(1);

    if (!user.length) {
      return NextResponse.json(
        { error: "User not found", message: "User does not exist." },
        { status: 404 }
      );
    }

    const userId = user[0].id;

    // Extract pagination and filter parameters
    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const limit = Number(url.searchParams.get("limit")) || 10;
    const filter = url.searchParams.get("filter") || "all";
    const offset = (page - 1) * limit;

    const userNotifications = await db
      .select({
        id: notifications.id,
        userId: notifications.userId,
        message: notifications.message,
        createdAt: notifications.createdAt,
        type: notifications.type,
        link: notifications.linkTo,
      })
      .from(notifications)
      .where(
        filter === "all"
          ? eq(notifications.userId, userId) // No type filter
          : eq(notifications.userId, userId) && eq(notifications.type, filter) // Type filter applied
      )
      .limit(limit)
      .offset(offset);

    return NextResponse.json({ notifications: userNotifications });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
