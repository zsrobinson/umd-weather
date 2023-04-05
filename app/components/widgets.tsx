import { OneByOne } from "./base-widgets";

export function TempWidget({ temp }: { temp: number }) {
  return <OneByOne>{temp}°</OneByOne>;
}
