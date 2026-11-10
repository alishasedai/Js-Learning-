import React ,{useContext,useEffect} from 'react'
import {UsersContext} from "../context/UsersContext"
const AnnouncementList = () => {
    const {fetchAdminAnnouncements,handleLogout, adminPosts } = useContext(UsersContext);
    useEffect(() => {
        fetchAdminAnnouncements()
    },[])
    console.log("adminPosts ", adminPosts);

    
  return (
    <div>
      AnnouncementList
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div>
        {adminPosts.map((val, index) => {
          return (
            <div key={val._id}>
              <p>Title : {val.title}</p>
              <p>Description : {val.description}</p>
              <p>Target Gender : {val.gender}</p> <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnnouncementList
