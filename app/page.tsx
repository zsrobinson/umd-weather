import { UpdatedAt } from "@/components/UpdatedAt";
import { OneByTwo, TwoByTwo } from "@/components/base-widgets";
import { TempWidget } from "@/components/widgets";
import { getWeather } from "@/lib/getWeather";

export default async function Home() {
  const weather = await getWeather(5, "min");
  const ms = Date.now();

  return (
    <main className="h-screens mx-auto flex w-fit flex-col items-center gap-8 p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">UMD Weather</h1>
        <UpdatedAt ms={ms} />
      </div>
      <div className="grid grid-cols-4 grid-rows-3 gap-8">
        <TempWidget temp={weather[0].outTemp} />
        <TempWidget temp={weather[0].outTemp} />
        <TwoByTwo className="whitespace-pre">
          {JSON.stringify(weather[0], null, 2)}
        </TwoByTwo>
        <OneByTwo>Bonjour</OneByTwo>
        <TempWidget temp={weather[0].outTemp} />
        <TempWidget temp={weather[0].outTemp} />
        <OneByTwo>Bonjour</OneByTwo>
      </div>
    </main>
  );
}
