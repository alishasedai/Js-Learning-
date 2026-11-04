import React ,{useContext} from 'react';
import {Routes,Route,Navigate} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard"
import ManagerDashboard from "./pages/ManagerDashboard"

import {EmployeeContext} from "./context/EmployeeContext"
const App = () => {
  const {user,loading} =useContext(EmployeeContext);
  if(loading){
    return <h2>Checking Authentication...</h2>
  }
  return (
    <div>
       
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={
             loading ? (<p>Loading profile....</p>)
              : !user ? (
                <Navigate to="/login" />
              ) : user.role === "manager" ? (
                <ManagerDashboard />
              ) : (
                <EmployeeDashboard />
              )
             
            } />
          </Routes>
        
      
    </div>
  );
}

export default App
