import { FeelsLikeWidget } from "@/components/FeelsLikeWidget";
import { TempWidget, TempWidgetSkeleton } from "@/components/TempWidget";
import { OneByOne, OneByTwo, TwoByTwo } from "@/components/base-widgets";
import { Suspense } from "react";

export default async function Home() {
  const now = Date.now();
  const time = new Date(now).toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: "America/New_York",
    timeZoneName: "short",
  });

  return (
    <main className="h-screens mx-auto flex w-fit flex-col items-center gap-8 p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">UMD Weather</h1>
        <span className="whitespace-pre italic text-gray-400">
          Generated at {time}
        </span>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-6 lg:grid-cols-4">
        <TempWidget />
        <FeelsLikeWidget />
        <TwoByTwo className="whitespace-pre">Hello World!</TwoByTwo>
        <OneByTwo>Bonjour</OneByTwo>
        <OneByOne>Hello</OneByOne>
        <OneByOne>World</OneByOne>
        <OneByTwo>Bonjour</OneByTwo>
      </div>
    </main>
  );
}
