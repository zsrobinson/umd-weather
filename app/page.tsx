import { ConditionWidget } from "@/components/ConditionWidget";
import { HourlyWidget } from "@/components/HourlyWidget";
import { TempWidget } from "@/components/TempWidget";
import { UpdatedAt } from "@/components/UpdatedAt";
import { WindWidget } from "@/components/WindWidget";
import { OneByTwo, TwoByTwo } from "@/components/base-widgets";
import { getOpenWeather } from "@/lib/getOpenWeather";
import { IconBrandGithub, IconBug, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";

export const revalidate = 30;

export default async function Home() {
  const weather = await getOpenWeather();

  return (
    <>
      <main className="mx-auto flex h-screen w-fit flex-col items-center gap-8 p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold">UMD Weather</h1>
          <UpdatedAt weather={weather} />
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

export function FooterButtons() {
  return (
    <>
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Link
          href={"/about"}
          className="rounded-full bg-gray-700 bg-opacity-50 p-2 text-gray-500 transition hover:bg-opacity-70"
          title="About"
        >
          <IconInfoCircle />
        </Link>

        <Link
          href={"https://www.github.com/zsrobinson/umd-weather"}
          className="rounded-full bg-gray-700 bg-opacity-50 p-2 text-gray-500 transition hover:bg-opacity-70"
          title="GitHub"
        >
          <IconBrandGithub />
        </Link>
      </div>
      <div className="absolute bottom-4 left-4 flex gap-2">
        <Link
          href={"/debug"}
          className="rounded-full bg-gray-700 bg-opacity-50 p-2 text-gray-500 transition hover:bg-opacity-70"
          title="Debug"
        >
          <IconBug />
        </Link>
      </div>
    </>
  );
}
