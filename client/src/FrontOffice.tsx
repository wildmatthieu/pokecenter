import { Outlet } from "react-router-dom";
import "./FrontOffice.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function FrontOffice() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default FrontOffice;
