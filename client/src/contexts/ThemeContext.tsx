import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
// Interface pour les props du fournisseur de contexte
// Cette interface spécifie que le composant "Provider" recevra des enfants (children),
// qui sont des éléments React à rendre à l'intérieur de ce composant.
interface ContextProviderProps {
  children: ReactNode; // ReactNode est un type qui représente tout ce qu'on peut rendre dans React (JSX, texte, tableau, etc.).
}
// Interface pour la valeur du contexte
interface ThemeContextValue {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  // `React.Dispatch` représente une fonction qui prend une "action" en paramètre.
  // Ici, `React.SetStateAction<string>` signifie que cette fonction attend soit :
  // - Une nouvelle valeur de type `string` (exemple : "dark"),
  // - Une fonction qui retourne une nouvelle valeur basée sur l'ancienne.
}
const ThemeContext = createContext<ThemeContextValue | null>(null);
export function ThemeProvider({ children }: ContextProviderProps) {
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
