import { Outlet } from "react-router-dom";
import "./BackOffice.css";
import Header from "./components/Header";
import StaffContext from "./contexts/StaffContext";
import staffData from "./datas/staff.json";

function BackOffice() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        {/* 
          Les données staffData sont actuellement contenues dans un fichier json 
          dans le dossier "datas". On pourrait imaginer qu'à la place, ces données 
          soient récupérées depuis une API Rest ou encore depuis une base de 
          données gérée par un backend
        */}
        <StaffContext.Provider value={staffData}>
          <Outlet />
        </StaffContext.Provider>
      </main>

      {/* footer inutile dans le backoffice :) */}
    </>
  );
}

export default BackOffice;
