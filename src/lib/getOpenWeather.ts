import { processEnv } from "@next/env";
import { z } from "zod";
import { env } from "~/env.mjs";

// api docs at https://openweathermap.org/api/one-call-3
export const openWeatherSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  current: z.object({
    dt: z.number(),
    sunrise: z.number(),
    sunset: z.number(),
    temp: z.number(),
    feels_like: z.number(),
    pressure: z.number(),
    humidity: z.number(),
    dew_point: z.number(),
    clouds: z.number(),
    uvi: z.number(),
    visibility: z.number(),
    wind_speed: z.number(),
    wind_gust: z.number().optional(),
    wind_deg: z.number(),
    rain: z.optional(
      z.object({
        "1h": z.number(),
      })
    ),
    snow: z.optional(
      z.object({
        "1h": z.number(),
      })
    ),
    weather: z.array(
      z.object({
        id: z.number(),
        main: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),
  minutely: z.array(
    z.object({
      dt: z.number(),
      precipitation: z.number(),
    })
  ),
  hourly: z.array(
    z.object({
      dt: z.number(),
      temp: z.number(),
      feels_like: z.number(),
      pressure: z.number(),
      humidity: z.number(),
      dew_point: z.number(),
      uvi: z.number(),
      clouds: z.number(),
      visibility: z.number(),
      wind_speed: z.number(),
      wind_gust: z.number().optional(),
      wind_deg: z.number(),
      rain: z.optional(
        z.object({
          "1h": z.number().optional(),
        })
      ),
      snow: z.optional(
        z.object({
          "1h": z.number().optional(),
        })
      ),
      pop: z.number(),
      weather: z.array(
        z.object({
          id: z.number(),
          main: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      ),
    })
  ),
  daily: z.array(
    z.object({
      dt: z.number(),
      sunrise: z.number(),
      sunset: z.number(),
      moonrise: z.number(),
      moonset: z.number(),
      moon_phase: z.number(),
      temp: z.object({
        day: z.number(),
        min: z.number(),
        max: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
      }),
      feels_like: z.object({
        day: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
      }),
      pressure: z.number(),
      humidity: z.number(),
      dew_point: z.number(),
      wind_speed: z.number(),
      wind_gust: z.number().optional(),
      wind_deg: z.number(),
      clouds: z.number(),
      uvi: z.number(),
      pop: z.number(),
      weather: z.array(
        z.object({
          id: z.number(),
          main: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      ),
    })
  ),
  alerts: z.optional(
    z.array(
      z.object({
        sender_name: z.string(),
        event: z.string(),
        start: z.number(),
        end: z.number(),
        description: z.string(),
        tags: z.array(z.string()),
      })
    )
  ),
});

export type OpenWeather = z.infer<typeof openWeatherSchema>;

/**
 * Gets UMD weather data from the OpenWeatherMap API
 * @returns validated JSON response from the OpenWeatherMap API
 * @see https://openweathermap.org/api/one-call-3
 */
export async function getOpenWeather(): Promise<OpenWeather> {
  const query = new URLSearchParams({
    lat: "38.98766",
    lon: "-76.94462",
    units: "imperial",
    appid: env.OPENWEATHERMAP_API_KEY,
  });

  const res: unknown = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?${query.toString()}`
  ).then((res) => res.json());

  const validated = openWeatherSchema.parse(res);

  console.log(
    "MAKING A QUERY TO OPENWEATHERMAP API!!! " +
      `current time: ${Date.now()}; time from response: ${validated.current.dt}`
  );

  return validated;
}
