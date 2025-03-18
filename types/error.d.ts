import { timestamp } from "@/utils/timestamp";

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public publicMessage?: string
  ) {
    super();

    console.log(timestamp(), "ApiError", statusCode, message);
  }
}
