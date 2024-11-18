import { useContext } from "react";
import EmployeeCard from "../../components/EmployeeCard";
import StaffContext from "../../contexts/StaffContext";
import type EmployeeType from "../../types/employeeType";

const Staff = () => {
  const employeesInformation: EmployeeType[] | null = useContext(StaffContext);

  return (
    <>
      <h2>Backoffice</h2>
      <h3>Contact personnels</h3>
      <section style={{ flexWrap: "wrap" }}>
        {employeesInformation?.map((employeeInfo) => (
          <EmployeeCard key={employeeInfo.id} infos={employeeInfo} />
        ))}
      </section>
    </>
  );
};

export default Staff;
