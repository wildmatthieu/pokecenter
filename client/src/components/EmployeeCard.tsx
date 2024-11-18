import type EmployeeType from "../types/employeeType";
import "./EmployeeCard.css";

interface EmployeeProps {
  infos: EmployeeType;
}

const EmployeeCard = ({ infos }: EmployeeProps) => {
  return (
    <div className="employee-card">
      <h3>{infos.name}</h3>
      <p>
        <strong>Sexe :</strong> {infos.sexe}
      </p>
      <p>
        <strong>Âge :</strong> {infos.age} ans
      </p>
      <p>
        <strong>Adresse :</strong> {infos.adress}
      </p>
      <p>
        <strong>Email :</strong>{" "}
        <a href={`mailto:${infos.email}`}>{infos.email}</a>
      </p>
      <p>
        <strong>Poketel :</strong>{" "}
        <a href={`mailto:${infos.poketel}`}>{infos.poketel}</a>
      </p>
    </div>
  );
};

export default EmployeeCard;
