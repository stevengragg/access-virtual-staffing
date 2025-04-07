import { fetchApi } from "./fetch-api";

export async function createNotification(
  userId: number,
  message: string,
  linkTo: string
) {
  return fetchApi("/notifications", {
    method: "POST",
    body: JSON.stringify({
      userId,
      message,
      type: "job_submissions",
      linkTo,
    }),
  });
}
