import { IconInfoCircle, IconBrandGithub, IconBug } from "@tabler/icons-react";
import Link from "next/link";

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
