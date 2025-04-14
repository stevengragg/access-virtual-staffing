import { db } from "@/database";
import { notifications } from "@/database/schema/notifications";
import { log } from "@/lib/logs";

/**
 * Creates an in-app notification for a user.
 * @param userId - The ID of the user to notify.
 * @param message - The notification message.
 * @param type - The type of notification (e.g., "info", "jobs", "job_submissions").
 * @param linkTo - Optional link associated with the notification.
 */
export async function createNotification(
  userId: number,
  message: string,
  type: "info" | "jobs" | "job_submissions",
  linkTo?: string
) {
  try {
    await db.insert(notifications).values({
      userId,
      message,
      type,
      linkTo,
    });
  } catch (error) {
    log("Failed to create notification:", "error", { error });
    throw new Error("Could not create notification");
  }
}
