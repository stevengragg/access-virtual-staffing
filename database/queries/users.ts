"use server";

import { db } from "@/database";
import { usersTable } from "@/database/schema";
import { IUserResponse } from "@/types/users";
import { sql, eq } from "drizzle-orm";
import { log } from "@/lib/logs";

export async function getUser(userId: number): Promise<IUserResponse> {
  try {
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, userId))
      .execute();

    if (user.length === 0) {
      return { ok: false, message: "User not found", user: undefined };
    }

    return { ok: true, message: "User fetched successfully", user: user[0] };
  } catch (error) {
    log("Error fetching user:", "error", error);
    return {
      ok: false,
      message: "Failed to fetch nearest stores",
      user: undefined,
    };
  }
}
