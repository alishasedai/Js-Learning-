import React ,{useState ,useEffect} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                if(!token) {
                    navigate("/login");
                    return ;
                }
                const response = await axios.post(
                  `http://localhost:3000/profile`,
                  {},
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  },
                );
                console.log("Profile : ",response.data.user);
                 setUser(response.data.user);
                
            } catch (error) {
                 console.log(
                   "Profile error:",
                   error.response?.data || error.message,
                 );

                 localStorage.removeItem("token");
                 navigate("/login");
            }
        }
        fetchProfile()
    },[navigate])
     if (!user) {
       return <h2>Loading profile...</h2>;
     }

  return (
    <div>
      
      <h2>Welcome {user.name}</h2>
      <hr />
        <p>Your id : {user.id}</p>
        <p>Your role : {user.role}</p>
    </div>
  )
}

export default Profile;
