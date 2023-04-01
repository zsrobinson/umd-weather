import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export async function loader({}: LoaderArgs) {
  const data = await fetch(
    "https://weather.umd.edu/wordpress/wp-content/plugins/meso-fsct/functions/get-data.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startms: new Date(Date.now() - 1000 * 60 * 5).getTime() / 1000,
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

  return { data };
}

export default function Index() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Welcome to UMD Weather</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
