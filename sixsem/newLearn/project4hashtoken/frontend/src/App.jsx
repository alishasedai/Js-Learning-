import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile"
import {EmployeeContextProvider} from "./context/EmployeeContext";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <EmployeeContextProvider>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </EmployeeContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
