import { formatTime } from "@/lib/formatTime";
import { getOpenWeather } from "@/lib/getOpenWeather";
import { Suspense } from "react";

export async function UpdatedAtAsync() {
  const weather = await getOpenWeather();

  const time = formatTime({
    date: weather.current.dt,
    showSeconds: true,
    showTimezone: true,
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
