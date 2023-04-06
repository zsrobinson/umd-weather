import { getTerpsWeather } from "@/lib/getTerpsWeather";
import { IconTemperature } from "@tabler/icons-react";
import { OneByOne } from "./base-widgets";

export async function TempWidget() {
  const weather = await getTerpsWeather(5, "min");
  const temp = weather[0].outTemp;

  return (
    <OneByOne className="flex flex-col">
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <IconTemperature size={16} />
        <span>Temperature</span>
      </div>
      <span className="text-6xl">{Math.round(temp)}°</span>
    </OneByOne>
  );
}

export function TempWidgetSkeleton() {
  return (
    <OneByOne className="flex flex-col">
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <IconTemperature size={16} />
        <span>Temperature</span>
      </div>
      <span className="mt-1 h-14 w-full animate-pulse rounded-lg bg-gray-700 bg-opacity-90"></span>
    </OneByOne>
  );
}
