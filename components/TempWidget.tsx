import { getOpenWeather } from "@/lib/getOpenWeather";
import { IconTemperature } from "@tabler/icons-react";
import { Suspense } from "react";
import { OneByOne } from "./base-widgets";

export async function TempWidgetAsync() {
  const weather = await getOpenWeather();

  return (
    <OneByOne className="flex flex-col gap-2">
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <IconTemperature size={16} />
        <span>Temperature</span>
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <span className="text-6xl">{Math.round(weather.current.temp)}°</span>
        <span className="text-lg text-gray-400">
          Feels like {Math.round(weather.current.feels_like)}°
        </span>
      </div>
    </OneByOne>
  );
}

export function TempWidgetSkeleton() {
  return (
    <OneByOne className="flex flex-col gap-2">
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <IconTemperature size={16} />
        <span>Temperature</span>
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-1">
        <span className="mt-1 h-14 w-3/4 animate-pulse rounded-lg bg-gray-700 bg-opacity-90"></span>
        <span className="mt-1 h-6 w-full animate-pulse rounded-lg bg-gray-700 bg-opacity-90"></span>
      </div>
    </OneByOne>
  );
}

export function TempWidget() {
  return (
    <Suspense fallback={<TempWidgetSkeleton />}>
      {/* @ts-expect-error Server Component */}
      <TempWidgetAsync />
    </Suspense>
  );
}
