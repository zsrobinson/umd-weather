import { getOpenWeather } from "@/lib/getOpenWeather";
import { Suspense } from "react";

export async function UpdatedAtAsync() {
  const weather = await getOpenWeather();

  const time = new Date(weather.current.dt * 1000).toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: "America/New_York",
    timeZoneName: "short",
  });

  return <span className="italic text-gray-400">Updated at {time}</span>;
}

export function UpdatedAtSkeleton() {
  return (
    <div className="my-1 h-4 w-full animate-pulse rounded-lg bg-gray-700 bg-opacity-50"></div>
  );
}

export function UpdatedAt() {
  return (
    <Suspense fallback={<UpdatedAtSkeleton />}>
      {/* @ts-expect-error Server Component */}
      <UpdatedAtAsync />
    </Suspense>
  );
}
