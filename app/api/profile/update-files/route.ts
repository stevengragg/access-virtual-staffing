import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { eq } from "drizzle-orm";
import { fileUploads, profiles } from "@/database/schema/profiles";
import { users } from "@/database/schema/users";
import { db } from "@/database";
import { gainRefreshedAccessToken } from "@/lib/api/authorization";
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

    const user = await db.query.users.findFirst({
      where: eq(users.userId, session.user.sub),
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found", message: "User does not exist.", ok: false },
        { status: 404 }
      );
    }

    const userId = user.id;

    const existingProfile = await db.query.profiles.findFirst({
      where: eq(profiles.userId, userId),
    });

    if (!existingProfile) {
      return NextResponse.json(
        {
          error: "Profile not found",
          message: "Profile does not exist.",
          ok: false,
        },
        { status: 404 }
      );
    }

    const profileId = existingProfile.id;

    const formData = await req.formData();
    log("POST /api/profile/update-files", "info", { formData });
    const fileEntries = Array.from(formData.entries());
    console.log(fileEntries);

    const accessToken = await gainRefreshedAccessToken("applications");

    for (const [key, value] of fileEntries) {
      if (value instanceof File) {
        const podioFormData = new FormData();
        podioFormData.append("source", value);
        podioFormData.append("filename", value.name);

        const response = await fetch("https://api.podio.com/file", {
          method: "POST",
          headers: {
            Authorization: `OAuth2 ${accessToken}`,
          },
          body: podioFormData,
        });

        if (!response.ok) {
          throw new Error("Failed to upload file to Podio");
        }

        const podioFile = await response.json();

        log("podio uploaded: ", "info", {
          profileId: profileId,
          type: key,
          link: podioFile.link,
          podioFileId: podioFile.file_id,
          filename: podioFile.name,
        });

        await db.insert(fileUploads).values({
          profileId: profileId,
          type: key,
          link: podioFile.link,
          podioFileId: podioFile.file_id,
          filename: podioFile.name,
        });
      }
    }

    return NextResponse.json({
      message: "Files uploaded successfully",
      ok: true,
    });
  } catch (error: any) {
    log("Error uploading files:", "error", { error: error?.message || "" });
    return NextResponse.json(
      { error: "Failed to upload files" },
      { status: 500 }
    );
  }
}
