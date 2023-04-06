import { z } from "zod";

export const terpsWeatherSchema = z.object({
  dateTime: z.string().transform((str) => Number(str)),
  outTemp: z.string().transform((str) => Number(str)),
  dewpoint: z.string().transform((str) => Number(str)),
  pressure: z.string().transform((str) => Number(str)),
  rainRate: z.string().transform((str) => Number(str)),
  windSpeed: z.string().transform((str) => Number(str)),
  windGust: z.string().transform((str) => Number(str)),
  windDir: z.string().transform((str) => Number(str)),
});

export type TerpsWeather = z.infer<typeof terpsWeatherSchema>;

/**
 * Gets the weather data from the latest x minutes/hours
 * @param duration number of units to get data for
 * @param units either minutes ("min") or hours ("hr")
 * @returns promised array of mesoterps weather data
 * @see https://weather.umd.edu/wordpress/micronet/about-2/
 */
export async function getTerpsWeather(
  duration: number,
  units: "min" | "hr"
): Promise<TerpsWeather[]> {
  const min = units === "min" ? duration : duration * 60;

  // Simulate a slow network request
  await new Promise((res) => setTimeout(res, 1500));

  const res: unknown = await fetch(
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
      next: { revalidate: 0 },
    }
  ).then((res) => res.json());

  const data = z.object({ data: z.array(terpsWeatherSchema) }).parse(res);
  return data.data;
}
