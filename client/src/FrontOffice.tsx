import { Outlet } from "react-router-dom";
import "./FrontOffice.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import SwitchThemeBtn from "./components/SwitchThemeBtn";

function FrontOffice() {
  return (
    <>
      <ThemeProvider>
        <header>
          <Header />
          <SwitchThemeBtn />
        </header>

        <Outlet />

        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </>
  );
}

export default FrontOffice;
