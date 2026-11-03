import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { StudentContextProvider } from './context/StudentContext'
import CreateStudent from './pages/CreateStudent'
import AllStudent from './pages/AllStudent'
import UpdateStudent from "./pages/UpdateStudent";
import Login from "./pages/Login"
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <StudentContextProvider>
          <Routes>
            <Route path="/" element={<CreateStudent />} />
            <Route path="/allStudent" element={<AllStudent />} />
            <Route path="/editStudent/:id" element={<UpdateStudent />}/>
            <Route path="/login" 
            element={<Login />} />
            <Route path="/register" element={<Register />}/>
          </Routes>
        </StudentContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
