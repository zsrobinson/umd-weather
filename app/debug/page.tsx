import { getOpenWeather } from "@/lib/getOpenWeather";

export default async function Page() {
  const openWeather = await getOpenWeather();

  return (
    <main>
      <pre>{JSON.stringify(openWeather, null, 2)}</pre>
    </main>
  );
}
