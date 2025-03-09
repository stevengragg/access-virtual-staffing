// import {

//     getSession,
//   } from "@auth0/nextjs-auth0";

import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { db } from "@/database";
import { usersTable } from "@/database/schema";

export async function POST(req: Request) {
  try {
    // const session = await getSession();
    // if (!session?.user) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    const { user_id, email, name, picture, given_name, family_name } =
      await req.json();
    console.log({ user_id, email, name, picture, given_name, family_name });

    // Check if user already exists
    const existingUser = await db.query.usersTable.findFirst({
      where: eq(usersTable.userId, user_id),
    });

    if (!existingUser) {
      await db.insert(usersTable).values({
        userId: user_id,
        email,
        firstName: given_name ?? "",
        lastName: family_name ?? "",
        name,
        profileImage: picture ?? "",
      });
    }

    return NextResponse.json({
      message: "User record created",
    });
  } catch (error) {
    console.error("Auth0 callback error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
