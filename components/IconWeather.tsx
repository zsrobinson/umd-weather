import {
  IconCloud,
  IconCloudFilled,
  IconCloudRain,
  IconCloudStorm,
  IconError404,
  IconMist,
  IconMoon,
  IconMoonStars,
  IconSnowflake,
  IconSunHigh,
  IconSunLow,
} from "@tabler/icons-react";

type IconWeatherProps = {
  icon: string;
  size?: number;
  useOpenWeatherIcons?: boolean;
  className?: string;
};

export function IconWeather({
  icon,
  size = 24,
  useOpenWeatherIcons = false,
  className,
}: IconWeatherProps) {
  if (useOpenWeatherIcons) {
    return (
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt="Weather Icon"
        width={size}
        height={size}
        className={className ? className : ""}
      />
    );
  }

  if (icon === "01d") return <IconSunHigh size={size} />;
  if (icon === "01n") return <IconMoonStars size={size} />;
  if (icon === "02d") return <IconSunLow size={size} />;
  if (icon === "02n") return <IconMoon size={size} />;
  if (icon === "03d" || icon === "03n") return <IconCloud size={size} />;
  if (icon === "04d" || icon === "04n") return <IconCloud size={size} />;
  if (icon === "09d" || icon === "09n") return <IconCloudRain size={size} />;
  if (icon === "10d" || icon === "10n") return <IconCloudRain size={size} />;
  if (icon === "11d" || icon === "11n") return <IconCloudStorm size={size} />;
  if (icon === "13d" || icon === "13n") return <IconSnowflake size={size} />;
  if (icon === "50d" || icon === "50n") return <IconMist size={size} />;
  return <IconError404 size={size} />;
}
