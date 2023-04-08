import { formatTime } from "@/lib/formatTime";
import { OpenWeather } from "@/lib/getOpenWeather";
import { IconClockHour4 } from "@tabler/icons-react";
import { IconWeather } from "./IconWeather";
import { OneByTwo } from "./base-widgets";

export function HourlyWidget({ weather }: { weather: OpenWeather }) {
  return (
    <OneByTwo className="flex flex-col">
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <IconClockHour4 size={16} />
        <span>Hourly</span>
      </div>
      <div className="flex h-full gap-3 overflow-x-scroll">
        {weather.hourly.map((hour) => (
          <div
            key={hour.dt}
            className="mx-3 mb-1 mt-3 flex w-full flex-col items-center justify-between gap-1"
          >
            <span className="text-gray-400">
              {formatTime({ date: hour.dt, showMinutes: false })}
            </span>

            <div className="flex flex-col items-center">
              <IconWeather icon={hour.weather[0].icon} size={24} />
              {hour.pop > 0 && (
                <span className="text-xs text-gray-400">
                  {(hour.pop * 100).toFixed(0)}%
                </span>
              )}
            </div>

            <span className="text-xl font-semibold">
              {Math.round(hour.temp)}°
            </span>
          </div>
        ))}
      </div>
    </OneByTwo>
  );
}

export function HourlyWidgetSkeleton() {
  return (
    <OneByTwo className="flex flex-col gap-2">
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <IconClockHour4 size={16} />
        <span>Hourly</span>
      </div>
      <span className="mt-1 h-full w-full animate-pulse rounded-lg bg-gray-700 bg-opacity-90"></span>
    </OneByTwo>
  );
}
