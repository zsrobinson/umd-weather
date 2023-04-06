import { z } from "zod";

/**
 * Gets the weather data from the latest x minutes/hours
 * @param duration number of units to get data for
 * @param units either minutes ("min") or hours ("hr")
 * @returns promised array of weather data
 */
export async function getWeather(duration: number, units: "min" | "hr") {
  const min = units === "min" ? duration : duration * 60;

  // Simulate a slow network request
  await new Promise((res, rej) => setTimeout(res, 1000));

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
