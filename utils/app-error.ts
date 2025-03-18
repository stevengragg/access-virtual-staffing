import { errorMessage } from "./error-message";
import { logger } from "./logger";

const fallbackMessage = `Unknown error`;

/**
 * App error object with safe distinction between public and internal messages.
 */
export class AppError {
  /**
   * Debugging message shown in logs only relevant for developers
   */
  public internalMessage: string = fallbackMessage;
  /**
   * Public message that end users should see
   */
  public publicMessage: string = fallbackMessage;
  /**
   * Error name forwarded from regular Error
   */
  public name = "App error";
  /**
   * Optional stack trace if it exists
   */
  public stack?: string;

  /**
   * @param input - can either be a string or an unknown error object
   * @param publicMessage - optional public message for users - proper fallback shown if let out
   * @param cause - if providing a string as input you may still want to provide the error cause for debugging
   */
  constructor(
    input: string | Error | unknown,
    publicMessage?: string,
    public cause?: Error | unknown,
    public meta?: {
      status: number;
      uiAlert?: "fatal" | "toast";
    },
    logErrors: boolean = true
  ) {
    if (typeof input === "string") {
      this.internalMessage = input;
    } else if (input instanceof Error) {
      this.internalMessage = input.message;
      this.stack = input.stack;
      this.name = input.name;
    }

    if (publicMessage) {
      this.publicMessage = publicMessage;
    }

    if (cause instanceof Error) {
      this.stack = cause.stack;
      this.name = cause.name;
    }

    if (logErrors) {
      logger.error(this.internalMessage, this);
    }
  }

  public static fromUnknownError(err: unknown): AppError {
    const msg = errorMessage(err);

    if (err instanceof AppError) {
      return err;
    }

    if (err instanceof Error) {
      return new AppError(msg.internalMessage, msg.publicMessage, err);
    }

    return new AppError(
      msg.internalMessage,
      msg.publicMessage,
      new Error(`Unknown error type was thrown: ${err}`)
    );
  }
}

export class FetchError extends Error {
  info?: any;
  status?: number;

  constructor(message: string, status?: number, info?: any) {
    super(message);
    this.status = status;
    this.info = info;
    Object.setPrototypeOf(this, FetchError.prototype); // Ensure correct prototype chain
  }
}
