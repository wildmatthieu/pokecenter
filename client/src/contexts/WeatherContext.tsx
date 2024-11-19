import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface WeatherContextProps {
  children: ReactNode;
}

interface WeatherData {
  hourly: {
    temperature_2m: number[];
  };
}

interface WeatherContextType {
  weather: WeatherData | null;
}

const WeatherContext = createContext<WeatherContextType | null>(null);

export function WeatherProvider({ children }: WeatherContextProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);

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
