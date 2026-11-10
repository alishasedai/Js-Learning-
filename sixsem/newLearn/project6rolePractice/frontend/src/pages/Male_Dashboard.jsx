import React, { useContext, useEffect } from "react";

import { UsersContext } from "../context/UsersContext";

const Male_Dashboard = () => {
  const { fetchAnnoucements, announcement,handleLogout } = useContext(UsersContext);
  console.log("annoucement", announcement);

  useEffect(() => {
    fetchAnnoucements();
  }, []);
  return (
    <div>
      Notice ..
      <div>
        <button onClick={handleLogout}>logout</button>
      </div>
      {announcement.map((val, index) => {
        return (
          <div key={val._id}>
            <p>Title : {val.title}</p>
            <p>Description : {val.description}</p>

            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Male_Dashboard;
