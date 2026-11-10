import React,{useContext} from 'react'
import {Routes,Route ,useNavigate} from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login";
import {UsersContext} from "./context/UsersContext";
import Male_Dashboard from "./pages/Male_Dashboard"
import Female_Dashboard from "./pages/Female_Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute"
import AnnoucementList from "./pages/AnnouncementList";
const App = () => {
  const {dashboard} = useContext(UsersContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute allowedRoute="student">
              {dashboard?.gender === "male" ? (
                <Male_Dashboard />
              ) : (
                <Female_Dashboard />
              )}
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/profile"
          element={
            !dashboard ? (
              <h2>loading....</h2>
            ) : dashboard.gender === "male" ? (
              <Male_Dashboard />
            ) : (
              <Female_Dashboard />
            )
          }
        /> */}

        {/* //admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoute="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/announcements"
          element={
            <ProtectedRoute allowedRoute="admin">
              <AnnoucementList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App
