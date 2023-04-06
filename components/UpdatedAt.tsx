"use client";

import { useEffect, useState } from "react";

export function UpdatedAt({ ms }: { ms: number }) {
  const [time, setTime] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTime(
      new Date(ms).toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );
  }, []);

  return (
    <span className="whitespace-pre italic text-gray-400">
      {time ? `Local Weather Updated at ${time}` : " "}
    </span>
  );
}
