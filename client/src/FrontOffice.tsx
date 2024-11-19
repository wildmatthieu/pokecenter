import { Outlet } from "react-router-dom";
import "./FrontOffice.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useTheme } from "./contexts/ThemeContext";

function FrontOffice() {
  const { theme } = useTheme();

  return (
    <>
      <Header />
      <header />

      <main className={theme === "light" ? "light_theme" : "dark_theme"}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default FrontOffice;
