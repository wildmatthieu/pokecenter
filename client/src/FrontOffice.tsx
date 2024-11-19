import { Outlet } from "react-router-dom";
import "./FrontOffice.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useTheme } from "./contexts/ThemeContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function FrontOffice() {
  const { theme } = useTheme();

  console.log(theme);

  return (
    <>
      <ThemeProvider>
        <header>
          <Header />
        </header>

        <main className={theme === "light" ? "light_theme" : "dark_theme"}>
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </>
  );
}

export default FrontOffice;
