import { IconSunHigh, IconTemperature } from "@tabler/icons-react";
import { OneByOne } from "./base-widgets";

export function TempWidget({ temp }: { temp: number }) {
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
