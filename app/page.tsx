import { FeelsLikeWidget } from "@/components/FeelsLikeWidget";
import { TempWidget } from "@/components/TempWidget";
import { UpdatedAt } from "@/components/UpdatedAt";
import { OneByOne, OneByTwo, TwoByTwo } from "@/components/base-widgets";

export default async function Home() {
  return (
    <main className="h-screens mx-auto flex w-fit flex-col items-center gap-8 p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">UMD Weather</h1>
        <UpdatedAt />
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-6 lg:grid-cols-4">
        <TempWidget />
        <FeelsLikeWidget />
        <TwoByTwo className="whitespace-pre">Hello World!</TwoByTwo>
        <OneByTwo>Bonjour</OneByTwo>
        <OneByOne>Hello</OneByOne>
        <OneByOne>World</OneByOne>
        <OneByTwo>Bonjour</OneByTwo>
      </div>
    </main>
  );
}
