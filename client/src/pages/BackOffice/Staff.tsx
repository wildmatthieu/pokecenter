import EmployeeCard from "../../components/EmployeeCard";
import staffData from "../../datas/staff.json";

const Staff = () => {
  return (
    <>
      <h2>Backoffice</h2>
      <h3>Contact personnels</h3>
      <section style={{ flexWrap: "wrap" }}>
        {staffData?.map((employeeInfo) => (
          <EmployeeCard key={employeeInfo.id} infos={employeeInfo} />
        ))}
      </section>
    </>
  );
};

export default Staff;
