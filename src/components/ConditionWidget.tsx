import { OpenWeather } from "~/lib/getOpenWeather";
import { IconWeather } from "./IconWeather";
import { OneByOne } from "./base-widgets";

export function ConditionWidget({ weather }: { weather: OpenWeather }) {
  return (
    <OneByOne className="flex flex-col gap-2">
      {weather.current.weather[0] !== undefined && (
        <>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <IconWeather icon={weather.current.weather[0].icon} size={16} />
            <span>Condition</span>
          </div>
          <div className="flex h-full flex-col items-center justify-center">
            <IconWeather icon={weather.current.weather[0].icon} size={80} />
            <span className="text-lg text-gray-300">
              {weather.current.weather[0].description}
            </span>
          </div>
        </>
      )}
    </OneByOne>
  );
}

export function ConditionWidgetSkeleton() {
  return (
    <OneByOne className="flex flex-col">
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <span className="h-4 w-4 animate-pulse rounded-full bg-gray-700 bg-opacity-90"></span>
        <span>Condition</span>
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <span className="h-20 w-20 animate-pulse rounded-lg bg-gray-700 bg-opacity-90"></span>
        <span className="h-6 w-full animate-pulse rounded-lg bg-gray-700 bg-opacity-90"></span>
      </div>
    </OneByOne>
  );
}
