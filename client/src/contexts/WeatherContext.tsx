import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext(null);

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=45.7640&longitude=4.8357&hourly=temperature_2m,precipitation",
    )
      .then((APIresponse) => APIresponse.json())
      .then((dataJson) => setWeather(dataJson));
  }, []);

  return (
    <WeatherContext.Provider value={{ weather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => {
  const value = useContext(WeatherContext);

  if (value == null) {
    throw new Error("useWeather has to be used within <WeatherProvider>");
  }

  return value;
};
