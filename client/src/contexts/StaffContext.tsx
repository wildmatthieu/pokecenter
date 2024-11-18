import { createContext } from "react";
import type EmployeeType from "../types/employeeType";

const StaffContext = createContext<EmployeeType[] | null>(null);

export default StaffContext;
