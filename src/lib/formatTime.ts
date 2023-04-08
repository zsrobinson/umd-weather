type FormatTimeProps = {
  date: number;
  showSeconds?: boolean;
  showMinutes?: boolean;
  showTimezone?: boolean;
};

export function formatTime({
  date,
  showSeconds = false,
  showMinutes = true,
  showTimezone = false,
}: FormatTimeProps): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    hour12: true,
    timeZone: "America/New_York",
  };

  if (showSeconds) options.second = "numeric";
  if (showMinutes) options.minute = "numeric";

  if (showTimezone) {
    options.timeZoneName = "short";
  }

  return new Date(date * 1000).toLocaleTimeString("en-US", options);
}
