import React ,{useContext} from 'react'
import {Routes,Route,useNavigate} from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import {UserContext} from "./context/UserContext"
// import BBA_Dashboard from "./pages/BBA_Dashboard"
// import BBM_Dashboard from "./pages/BBM_Dashboard";
// import BIT_Dashboard from "./pages/BIT_Dashboard";
// import BCA_Dashboard from "./pages/BCA_Dashboard"
import Faculty_Dashboard from "./pages/Faculty_Dashboard";


const App = () => {
  const navigate = useNavigate();
  const {dash} = useContext(UserContext)
  return (
    <div>
    <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        {/* <Route path="/profile" element={
          !dash ? <h2>Loading ...</h2> : 
          dash.faculty === "BCA" 
          ? <BCA_Dashboard />
          : dash.faculty === "BIT" 
          ? <BIT_Dashboard />
          : dash.faculty === "BBM"
          ? <BBM_Dashboard />
          : <BBA_Dashboard />
        }/> */}
        
      <Route path="/profile" element={<Faculty_Dashboard />}/>
      </Routes>   
    </div>
  )
}

export default App
