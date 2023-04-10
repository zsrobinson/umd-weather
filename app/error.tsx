"use client";

import { IconAlertTriangle } from "@tabler/icons-react";

export default function Error() {
  return (
    <main className="mx-auto flex h-screen w-fit flex-col items-center gap-8 p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">UMD Weather</h1>
        <span className="flex items-center gap-1 italic text-red-400">
          <IconAlertTriangle size={16} />
          Weather Data Unavailable
        </span>
      </div>
    </main>
  );
}
