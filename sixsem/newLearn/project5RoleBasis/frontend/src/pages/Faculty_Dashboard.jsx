import React ,{useContext} from 'react'
import BBA_Dashboard from "./BBA_Dashboard";
import BBM_Dashboard from "./BBM_Dashboard";
import BIT_Dashboard from "./BIT_Dashboard";
import BCA_Dashboard from "./BCA_Dashboard" 
import {UserContext} from "../context/UserContext"
const Faculty_Dashboard = () => {
  const { dash, handleLogout } = useContext(UserContext);
  if (!dash) {
    return <h2>Loading profile ...</h2>;
  }
  const renderDashboard = () => {
    switch (dash.faculty) {
      case "BCA":
        return (
          <div>
            <BCA_Dashboard />
          </div>
        );
      case "BBM":
        return <BBM_Dashboard />;

      case "BIT":
        return <BIT_Dashboard />;

      case "BBA":
        return <BBA_Dashboard />;

      default:
        return <h2>Faculty dashboard not found</h2>;
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      {renderDashboard()}
    </div>
  );
}
export default Faculty_Dashboard;
