import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const value = useContext(ThemeContext);

  if (value == null) {
    throw new Error("useTheme has to be used within <ThemeProvider>");
  }

  return value;
};
