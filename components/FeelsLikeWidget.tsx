import { getOpenWeather } from "@/lib/getOpenWeather";
import { IconMoodSmile } from "@tabler/icons-react";
import { Suspense } from "react";
import { OneByOne } from "./base-widgets";

export async function FeelsLikeWidgetAsync() {
  const weather = await getOpenWeather();

  return (
    <OneByOne className="flex flex-col">
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <IconMoodSmile size={16} />
        <span>Feels Like</span>
      </div>
      <span className="text-6xl">
        {Math.round(weather.current.feels_like)}°
      </span>
    </OneByOne>
  );
}

export function FeelsLikeWidgetSkeleton() {
  return (
    <OneByOne className="flex flex-col">
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <IconMoodSmile size={16} />
        <span>Feels Like</span>
      </div>
      <span className="mt-1 h-14 w-full animate-pulse rounded-lg bg-gray-700 bg-opacity-90"></span>
    </OneByOne>
  );
}

export function FeelsLikeWidget() {
  return (
    <Suspense fallback={<FeelsLikeWidgetSkeleton />}>
      {/* @ts-expect-error Server Component */}
      <FeelsLikeWidgetAsync />
    </Suspense>
  );
}
