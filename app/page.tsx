import { FeelsLikeWidget } from "@/components/FeelsLikeWidget";
import { HourlyWidget } from "@/components/HourlyWidget";
import { TempWidget } from "@/components/TempWidget";
import { UpdatedAt } from "@/components/UpdatedAt";
import { WindWidget } from "@/components/WindWidget";
import { OneByOne, OneByTwo, TwoByTwo } from "@/components/base-widgets";
import { IconBrandGithub, IconBug } from "@tabler/icons-react";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="mx-auto flex h-screen w-fit flex-col items-center gap-8 p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold">UMD Weather</h1>
          <UpdatedAt />
        </div>
        <div className="grid grow-0 grid-cols-2 grid-rows-3 gap-6 lg:grid-cols-4">
          <TempWidget />
          <FeelsLikeWidget />
          <TwoByTwo className="whitespace-pre">Hello World!</TwoByTwo>
          <HourlyWidget />
          <WindWidget />
          <OneByOne>World</OneByOne>
          <OneByTwo>Bonjour</OneByTwo>
        </div>
      </main>
      <FooterButtons />
    </>
  );
}

function FooterButtons() {
  return (
    <div className="absolute bottom-4 right-4 flex gap-2">
      <Link
        href={"/debug"}
        className="rounded-full bg-gray-700 bg-opacity-50 p-2 text-gray-500 transition hover:bg-opacity-70"
      >
        <IconBug />
      </Link>
      <Link
        href={"https://www.github.com/zsrobinson/umd-weather"}
        className="rounded-full bg-gray-700 bg-opacity-50 p-2 text-gray-500 transition hover:bg-opacity-70"
      >
        <IconBrandGithub />
      </Link>
    </div>
  );
}
