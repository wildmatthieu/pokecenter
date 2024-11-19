import { useWeather } from "../contexts/WeatherContext";
import "./Temperature.css";

const Temperature = () => {
  const weatherDatas = useWeather();

  return (
    <section className="temperature">
      <p>il fait {weatherDatas.weather?.hourly.temperature_2m[0]} degrés</p>
    </section>
  );
};

export default Temperature;
