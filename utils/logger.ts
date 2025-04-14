import { AppError } from "./app-error";
import { errorMessage } from "./error-message";
import { timestamp } from "./timestamp";

export enum LogLevel {
  info = "info",
  warning = "warning",
  error = "error",
  success = "success",
  verbose = "verbose",
}

export interface LogEvent {
  message: string;
  level: LogLevel;
  errorDetails?: ErrorDetails;
  data?: object;
}

export interface ErrorDetails {
  publicMessage: string;
  internalMessage: string;
  errorName: string;
  path: string;
  logMessages: string[];
  stack?: string;
}

class Logger {
  private logEvents: LogEvent[] = [];

  public constructor(private logToConsole = true) {}

  public info(message: string, data?: object) {
    this.write({ message, level: LogLevel.info, data });
  }

  public success(message: string, data?: object) {
    this.write({ message, level: LogLevel.success, data });
  }

  public verbose(message: string, data?: object) {
    this.write({ message, level: LogLevel.verbose, data });
  }

  public warn(message: string, data?: object) {
    this.write({ message, level: LogLevel.warning, data });
  }

  public error(message: string, error?: unknown) {
    const errorDetails = error ? this.toErrorDetails(error) : undefined;
    this.write({ message, level: LogLevel.error, errorDetails });
  }

  private write(logEvent: LogEvent) {
    if (this.logToConsole) {
      const color = this.getConsoleColor(logEvent.level);
      const style = `color: ${color}`;

      const message = `%c[${timestamp()}][${logEvent.level}] ${
        logEvent.message
      }`;

      if (logEvent.data) {
        // eslint-disable-next-line:
        console.log(message, style, logEvent.data);
      } else {
        // eslint-disable-next-line:
        console.log(message, style);
      }

      if (
        process.env.NODE_ENV === "production" ||
        process.env.NEXT_PUBLIC_ENVIRONMENT === "production"
      ) {
        let level = logEvent.level;

        if (level === LogLevel.success || level === LogLevel.verbose) {
          level = LogLevel.info;
        }
      }
    }

    this.logEvents.push(logEvent);
  }

  private getConsoleColor(level: LogLevel) {
    if (level === LogLevel.info) {
      return "#2e99d9"; // blue
    }

    if (level === LogLevel.warning) {
      return "#ffbb00"; // yellow
    }

    if (level === LogLevel.success) {
      return "#00a854"; // green
    }

    if (level === LogLevel.verbose) {
      return "#9c27b0";
    }

    return "#b91e1e"; // red
  }

  private toErrorDetails(error: unknown): ErrorDetails | undefined {
    const appError = AppError.fromUnknownError(error);
    const message = errorMessage(appError);
    const logMessages = this.logEvents.slice(-5).map((e) => e.message);

    return {
      publicMessage: message.publicMessage,
      internalMessage: message.internalMessage,
      path: window.location.pathname,
      stack: appError.stack,
      errorName: appError.name,
      logMessages,
    };
  }
}

export const logger = new Logger(true);
