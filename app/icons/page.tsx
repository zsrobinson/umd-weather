import { IconWeather } from "@/components/IconWeather";

export default function Page() {
  // prettier-ignore
  const icons = ['01d', '01n', '02d', '02n', '03d', '03n', '04d', '04n', '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n', '50d', '50n'];

  return (
    <main className="grid w-fit grid-cols-2 gap-6 p-8">
      {icons.map((icon) => (
        <div className="flex items-center gap-2">
          <IconWeather icon={icon} />
          <span>{icon}</span>
        </div>
      ))}
    </main>
  );
}
