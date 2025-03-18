import { ApiError } from "@/types/error";
import { AppError, FetchError } from "@/utils/app-error";

interface Payload {
  method: "POST" | "PUT" | "DELETE";
  body: string | FormData;
}

export type StatusResponse = { ok: boolean };

export async function fetchApi<T>(
  url: string,
  payload: Payload | object = {},
  timeoutDuration?: number // Optional timeout in milliseconds
): Promise<T> {
  const timeoutPromise = (delay: number): Promise<T> =>
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), delay)
    );

  try {
    const fetchPromise = fetch(`/api${url}`, payload).then(async (res) => {
      const result: T = await res.json();

      if (res.status !== 200 && res.status !== 201) {
        const apiError = result as ApiError;
        const status = (result as any)?.statusCode || res.status;

        throw new AppError(
          apiError.message,
          apiError.publicMessage,
          undefined,
          { status }
        );
      }

      return result;
    });

    // If a timeoutDuration is provided, use Promise.race to race the fetch promise against the timeout
    return timeoutDuration !== undefined
      ? await Promise.race([fetchPromise, timeoutPromise(timeoutDuration)])
      : await fetchPromise; // If no timeout is specified, just wait for the fetch promise
  } catch (err) {
    // captureException(err);

    throw AppError.fromUnknownError(err);
  }
}

/**
 * fetchAPI optimized for useSwr to comply with the library's error handling.
 */
export async function fetchApiWithSwrErrorHandling<T>(
  url: string,
  payload: Payload | object = {}
): Promise<T> {
  try {
    return await fetchApi(url, payload);
  } catch (err: any) {
    throw new FetchError(
      "An error occurred while fetching the data.",
      err?.meta?.status ?? 500,
      err?.errorInfo?.internalMessage ?? err?.message ?? "Unknown error"
    );
  }
}

export async function fetchAndParseNdJson<T>(
  url: string,
  payload: Payload,
  callback: (data: T | { error: string }) => void
) {
  try {
    const response = await fetch(`/api${url}`, payload);

    if (!response.ok) {
      callback({ error: "Network response was not ok" });
      return;
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    const processChunk = (chunk: string) => {
      buffer += chunk;
      const lines = buffer.split("\n");
      buffer = lines.pop() || ""; // Keep the last incomplete line in the buffer

      lines.forEach((line) => {
        if (line) {
          try {
            const jsonObject = JSON.parse(line) as T;
            callback(jsonObject);
          } catch (error) {
            console.error("Error parsing JSON:", error);
            throw new Error("Error parsing JSON");
          }
        }
      });
    };

    if (!reader) {
      throw new Error("Reader is undefined");
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      processChunk(chunk);
    }

    // Process any remaining data in the buffer
    if (buffer) {
      processChunk("\n");
    }
  } catch (err) {
    console.log("ERROR", err);
    throw AppError.fromUnknownError(err);
  }
}
