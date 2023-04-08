import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { ConditionWidget } from "~/components/ConditionWidget";
import { FooterButtons } from "~/components/FooterButtons";
import { HourlyWidget } from "~/components/HourlyWidget";
import { TempWidget } from "~/components/TempWidget";
import { WindWidget } from "~/components/WindWidget";
import { OneByTwo, TwoByTwo } from "~/components/base-widgets";
import { formatTime } from "~/lib/formatTime";
import { getOpenWeather } from "~/lib/getOpenWeather";

export default function Index({
  weather,
  genTime,
  dataTime,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>UMD Weather</title>
        <meta
          name="description"
          content="Weather Site for the University of Maryland"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex h-screen w-fit flex-col items-center gap-8 p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold">UMD Weather</h1>
          <span className="italic text-gray-400">
            Page Generated at {genTime}, Data from {dataTime}
          </span>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-6 lg:grid-cols-4">
          <ConditionWidget weather={weather} />
          <TempWidget weather={weather} />
          <TwoByTwo className="whitespace-pre">Hello World!</TwoByTwo>
          <HourlyWidget weather={weather} />
          <WindWidget weather={weather} />
          <WindWidget weather={weather} />
          <OneByTwo>Bonjour</OneByTwo>
        </div>
      </main>
      <FooterButtons />
    </>
  );
}

export async function getStaticProps() {
  const weather = await getOpenWeather();
  const genTime = formatTime({ date: Date.now() / 1000, showSeconds: true });
  const dataTime = formatTime({ date: weather.current.dt, showSeconds: true });

  return {
    props: { weather, genTime, dataTime },
  };
}
