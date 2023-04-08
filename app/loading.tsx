import { ConditionWidgetSkeleton } from "@/components/ConditionWidget";
import { HourlyWidgetSkeleton } from "@/components/HourlyWidget";
import { TempWidgetSkeleton } from "@/components/TempWidget";
import { UpdatedAtSkeleton } from "@/components/UpdatedAt";
import { WindWidgetSkeleton } from "@/components/WindWidget";
import { TwoByTwo, OneByTwo } from "@/components/base-widgets";
import { FooterButtons } from "./page";

export default function Loading() {
  return (
    <>
      <main className="mx-auto flex h-screen w-fit flex-col items-center gap-8 p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold">UMD Weather</h1>
          <UpdatedAtSkeleton />
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-6 lg:grid-cols-4">
          <ConditionWidgetSkeleton />
          <TempWidgetSkeleton />
          <TwoByTwo className="whitespace-pre">Hello World!</TwoByTwo>
          <HourlyWidgetSkeleton />
          <WindWidgetSkeleton />
          <WindWidgetSkeleton />
          <OneByTwo>Bonjour</OneByTwo>
        </div>
      </main>
      <FooterButtons />
    </>
  );
}
