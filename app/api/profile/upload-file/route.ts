import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

import { db } from "@/database";
import { fileUploads, profiles } from "@/database/schema/profiles";
import { users } from "@/database/schema/users";
import { eq } from "drizzle-orm";
import { log } from "@/lib/logs";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession(req, NextResponse.next());

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Please login.", ok: false },
        { status: 401 }
      );
    }

    const { type, publicId, fileUrl, filename } = await req.json();
    log("POST /api/profile/upload-files", "info", {
      type,
      publicId,
      fileUrl,
      filename,
    });

    if (!type || !publicId || !fileUrl || !filename) {
      return NextResponse.json(
        {
          error: "Validation Error",
          message: "Missing required fields",
          ok: false,
        },
        { status: 400 }
      );
    }

    const user = await db.query.users.findFirst({
      where: eq(users.userId, session.user.sub),
    });

    if (!user) {
      return NextResponse.json(
        { error: "Not Found", message: "User not found.", ok: false },
        { status: 404 }
      );
    }

    const profile = await db.query.profiles.findFirst({
      where: eq(profiles.userId, user.id),
    });

    if (!profile) {
      return NextResponse.json(
        { error: "Not Found", message: "Profile not found.", ok: false },
        { status: 404 }
      );
    }

    await db.insert(fileUploads).values({
      type,
      link: fileUrl,
      podioFileId: publicId,
      cloudinaryId: publicId,
      filename,
      createdAt: new Date(),
      profileId: profile.id,
    });

    return NextResponse.json({
      message: "File uploaded successfully!",
      ok: true,
    });
  } catch (error: any) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Failed to upload file",
        ok: false,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getSession(req, NextResponse.next());

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Please login.", ok: false },
        { status: 401 }
      );
    }

    const { fileId } = await req.json();
    log("DELETE /api/profile/upload-file", "info", { fileId });

    if (!fileId) {
      return NextResponse.json(
        {
          error: "Validation Error",
          message: "Missing file ID",
          ok: false,
        },
        { status: 400 }
      );
    }

    const deletedFile = await db
      .delete(fileUploads)
      .where(eq(fileUploads.id, fileId));

    if (!deletedFile) {
      return NextResponse.json(
        { error: "Not Found", message: "File not found.", ok: false },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "File deleted successfully!",
      ok: true,
    });
  } catch (error: any) {
    console.error("Error deleting file:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Failed to delete file",
        ok: false,
      },
      { status: 500 }
    );
  }
}
