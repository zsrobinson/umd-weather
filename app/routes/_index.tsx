import { LoaderArgs, V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { z } from "zod";
import { TempWidget } from "~/components/TempWidget";

export const meta: V2_MetaFunction = () => {
  return [{ title: "UMD Weather" }];
};

export async function loader({}: LoaderArgs) {
  // offline rn, just wanna work on styling
  // const weather = await getWeather(5, "min");

  let weather: Weather[] = [];
  return json({ weather });
}

export default function Index() {
  const { weather } = useLoaderData<typeof loader>();

  return (
    <main className="h-screens mx-auto w-fit p-8">
      <div className="grid grid-cols-4 gap-8">
        {Array.from(Array(12)).map(() => (
          <TempWidget temp={48} />
        ))}
      </div>
    </main>
  );
}

/**
 * Gets the weather data from the latest x minutes/hours
 * @param duration number of units to get data for
 * @param units either minutes ("min") or hours ("hr")
 */
async function getWeather(duration: number, units: "min" | "hr") {
  const min = units === "min" ? duration : duration * 60;

  const res = await fetch(
    "https://weather.umd.edu/wordpress/wp-content/plugins/meso-fsct/functions/get-data.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startms: new Date(Date.now() - 1000 * 60 * min).getTime() / 1000,
        endms: Date.now() / 1000,
        db: "mesoterp7DB",
        cols: [
          "dateTime",
          "outTemp",
          "dewpoint",
          "pressure",
          "rainRate",
          "windSpeed",
          "windGust",
          "windDir",
        ],
      }),
    }
  ).then((res) => res.json());

  const data = z.object({ data: z.array(weatherSchema) }).parse(res);
  return data.data;
}

const weatherSchema = z.object({
  dateTime: z.string().transform((str) => Number(str)),
  outTemp: z.string().transform((str) => Number(str)),
  dewpoint: z.string().transform((str) => Number(str)),
  pressure: z.string().transform((str) => Number(str)),
  rainRate: z.string().transform((str) => Number(str)),
  windSpeed: z.string().transform((str) => Number(str)),
  windGust: z.string().transform((str) => Number(str)),
  windDir: z.string().transform((str) => Number(str)),
});

type Weather = z.infer<typeof weatherSchema>;
