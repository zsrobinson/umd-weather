import {
  IconBrandGithub,
  IconMoodSmile,
  IconStar,
  IconSunHigh,
  IconWindsock,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto flex h-screen w-fit flex-col items-center gap-8 p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">UMD Weather</h1>
        <span className="italic text-gray-400">About This Project</span>
      </div>
      <div className="flex gap-4">
        <div className="flex max-w-2xl flex-col gap-4 rounded-3xl bg-gray-700 bg-opacity-50 p-6 text-gray-300">
          <p>
            Hey there, my name&apos;s Zach! I was inspired by the Mesoterps
            project at the University of Maryland to create a little weather
            website. I was originally planning on integrating data from
            Mesoterps into this website, though it only returns current and
            historical data instead of forecasting, something that would be more
            useful for a weather app. Instead, I&apos;m using the One Call API
            from OpenWeatherMap to retrieve all of this data for the site.
          </p>
          <p>
            For some of the technical details, I&apos;m using the Next.js Beta
            App Directory and React Server Components to render everything. Most
            of my full stack web dev experience has been with Remix, so I wanted
            to try out something new. This is all hosted on Vercel and the data
            is revalidated every two minutes. Since I only get 1,000 free API
            calls per day from OpenWeatherMap, this ensures I don&apos;t go over
            that limit.
          </p>
          <p>
            Feel free to star the project or dig into the source code on GitHub!
            If there&apos;s a bug or a feature you&apos;d like to see, feel free
            to reach out to me about it, open an issue on GitHub, or even
            better, submit a pull request!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <AboutPageLink
            icon={<IconBrandGithub size={20} />}
            text="Source Code"
            href="https://github.com/zsrobinson/umd-weather"
          />
          <AboutPageLink
            icon={<IconWindsock size={20} />}
            text="About Mesoterps"
            href="https://weather.umd.edu/wordpress/micronet/about-2/"
          />
          <AboutPageLink
            icon={<IconSunHigh size={20} />}
            text="OpenWeatherMap"
            href="https://openweathermap.org/api/one-call-3"
          />
          <AboutPageLink
            icon={<IconMoodSmile size={20} />}
            text="My Personal Site"
            href="https://zsrobinson.com"
          />
        </div>
      </div>
    </main>
  );
}

type AboutPageLinkProps = {
  icon: React.ReactNode;
  text: string;
  href: string;
};

function AboutPageLink({ icon, text, href }: AboutPageLinkProps) {
  return (
    <Link
      href={href}
      className="flex w-full items-center gap-3 rounded-2xl bg-gray-700 bg-opacity-50 p-4 text-gray-400 transition hover:bg-opacity-70 hover:text-gray-300 hover:drop-shadow-2xl active:scale-95"
    >
      {icon}
      <span className="mr-4">{text}</span>
    </Link>
  );
}
