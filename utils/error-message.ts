import { AppError } from "./app-error";

interface Message {
  internalMessage: string;
  publicMessage: string;
}

/**
 * Returns and formats error messages in a consistent format
 * Intended for catch blocks
 */
export function errorMessage(err: unknown): Message {
  const unknownMessage = `Unknown error`;

  if (err instanceof AppError) {
    return {
      internalMessage: err.internalMessage,
      publicMessage: err.publicMessage,
    };
  }

  if (err instanceof Error) {
    return {
      internalMessage: err.message,
      publicMessage: unknownMessage,
    };
  }

  // eslint-disable-next-line:
  console.debug(err);

  return {
    internalMessage: unknownMessage,
    publicMessage: unknownMessage,
  };
}
