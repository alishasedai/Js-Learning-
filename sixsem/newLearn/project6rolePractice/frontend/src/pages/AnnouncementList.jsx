import React ,{useContext,useEffect} from 'react'
import {UsersContext} from "../context/UsersContext"
const AnnouncementList = () => {
    const {fetchAdminAnnouncements, adminPosts } = useContext(UsersContext);
    useEffect(() => {
        fetchAdminAnnouncements()
    },[])
    console.log("adminPosts ", adminPosts);

    
  return <div>
    AnnouncementList
    <div>
        {adminPosts.map((val,index) => {
            
            return <div key={val._id}>
                <p>Title : {val.title}</p>
                <p>Description : {val.description}</p>
                <p>Target Gender : {val.gender}</p> <br />
            </div>
        }
        )}
    </div>
  </div>;
}

export default AnnouncementList
