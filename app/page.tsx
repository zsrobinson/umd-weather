import { getWeather } from "@/lib/getWeather";

export default async function Home() {
  const weather = await getWeather(5, "min");

  return (
    <main className="p-4">
      <h1 className="mb-4 text-2xl font-semibold italic">UMD Weather :)</h1>
      <pre>{JSON.stringify(weather, null, 2)}</pre>
    </main>
  );
}
