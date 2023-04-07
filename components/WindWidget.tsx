import { getOpenWeather } from "@/lib/getOpenWeather";
import {
  IconArrowDownCircle,
  IconTemperature,
  IconWind,
} from "@tabler/icons-react";
import { Suspense } from "react";
import { OneByOne } from "./base-widgets";

export async function WindWidgetAsync() {
  const weather = await getOpenWeather();

  return (
    <OneByOne className="flex flex-col">
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <IconWind size={16} />
        <span>Wind</span>
      </div>
      <div className="flex h-full items-center gap-2">
        <div className="flex w-1/2 flex-col items-center leading-none">
          <span className="text-4xl">
            {weather.current.wind_speed.toFixed(1)}
          </span>
          <span className="text-gray-400">mph</span>
        </div>
        <div className="flex w-1/2 flex-col items-center">
          <IconArrowDownCircle
            size={52}
            style={{
              transform: `rotate(${weather.current.wind_deg}deg)`,
            }}
          />
          <span className="text-gray-400">
            {degreesToBearing(weather.current.wind_deg)}
          </span>
        </div>
      </div>
    </OneByOne>
  );
}

export function WindWidgetSkeleton() {
  return (
    <OneByOne className="flex flex-col">
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <IconWind size={16} />
        <span>Wind</span>
      </div>
      <div className="flex h-full items-center gap-2">
        <div className="flex h-20 w-1/2 animate-pulse flex-col items-center rounded-lg bg-gray-700 bg-opacity-90"></div>
        <div className="flex h-20 w-1/2 animate-pulse flex-col items-center rounded-lg bg-gray-700 bg-opacity-90"></div>
      </div>{" "}
    </OneByOne>
  );
}

export function WindWidget() {
  return (
    <Suspense fallback={<WindWidgetSkeleton />}>
      {/* @ts-expect-error Server Component */}
      <WindWidgetAsync />
    </Suspense>
  );
}

function degreesToBearing(degrees: number) {
  // prettier-ignore
  const bearings = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  const index = Math.round(degrees / (360 / bearings.length)) % bearings.length;
  return bearings[index];
}
