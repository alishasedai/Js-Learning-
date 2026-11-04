import React, { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
const EmployeeDashboard = () => {
    
    const { user } = useContext(EmployeeContext);

  return (
    <div className="text-3xl text-red-600 text-center mt-10 ">
      Welcome to employee dashboard , {user.name}
    </div>
  )
}

export default EmployeeDashboard
