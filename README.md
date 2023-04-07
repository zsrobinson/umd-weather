# UMD Weather

Hey there! I was inspired by the [Mesoterps](https://weather.umd.edu/wordpress/micronet/about-2/) project at the University of Maryland to create a little weather website. I was originally planning on integrating data from Mesoterps into this website, though it only returns current and historical data instead of forecasting, something that would be more useful for a weather app. Instead, I'm using the [One Call API](https://openweathermap.org/api/one-call-3) from OpenWeatherMap to retrieve all of this data for the site.

For some of the technical details, I'm using the Next.js Beta App Directory and React Server Components to render everything. Most of my full stack web dev experience has been with Remix, so I wanted to try out something new. This is all hosted on Vercel and the data is revalidated every two minutes. Since I only get 1,000 free API calls per day from OpenWeatherMap, this ensures I don't go over that limit.

Feel free to star the project or dig into the source code on GitHub! If there's a bug or a feature you'd like to see, feel free to reach out to me about it, open an issue on GitHub, or even better, submit a pull request!

## Local Development Steps

Make sure to request an API Key from OpenWeatherMap and subscribe to the [One Call 3.0 API](https://openweathermap.org/api/one-call-3)!

```bash
git clone https://github.com/zsrobinson/umd-weather.git
cd umd-weather
echo OPENWEATHERMAP_API_KEY={key} > .env.local
npm install
npm run dev
```
