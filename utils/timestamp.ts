export function pad(time: number): string {
  return time.toString().substring(0, 2).padStart(2, "0");
}

export function timestamp(): string {
  const date = new Date();
  const hours = pad(date.getHours() + 1);
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  const milliseconds = pad(date.getMilliseconds());
  const timestamp = `${hours}:${minutes}:${seconds}:${milliseconds}`;

  return timestamp;
}
