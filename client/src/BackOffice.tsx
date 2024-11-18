import { Outlet } from "react-router-dom";
import "./BackOffice.css";
import Header from "./components/Header";

function BackOffice() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      {/* footer inutile dans le backoffice :) */}
    </>
  );
}

export default BackOffice;
