import React,{useContext} from 'react'
import {EmployeeContext} from "../context/EmployeeContext"

const ManagerDashboard = () => {
    const {user} = useContext(EmployeeContext)
    console.log("usss : ",user);
    
  return (
    <div className="text-3xl text-red-600 text-center mt-10 ">
      Welcome to manager dashboard ,{user.name}
    </div>
  );
}

export default ManagerDashboard
