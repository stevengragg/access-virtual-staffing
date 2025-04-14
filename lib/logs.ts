import chalk from "chalk";

export function log(
  message: string,
  level: "info" | "warn" | "error" = "info",
  data?: any
): void {
  const formattedMessage = data
    ? `${message} ${JSON.stringify(data)}`
    : message;

  switch (level) {
    case "info":
      console.log(chalk.blue(formattedMessage));
      break;
    case "warn":
      console.log(chalk.yellow(formattedMessage));
      break;
    case "error":
      console.log(chalk.red(formattedMessage));
      break;
    default:
      console.log(formattedMessage);
      break;
  }
}
