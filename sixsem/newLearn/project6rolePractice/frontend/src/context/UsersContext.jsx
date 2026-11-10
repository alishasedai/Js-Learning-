import {createContext,useState,useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";


export const UsersContext = createContext();

export const UsersContextProvider = ({children}) => {
     const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [announcement, setannouncement] = useState([])
    const [adminPost, setadminPost] = useState({
      title : "",
      description : "",
      gender : ""
    })
    const [adminPosts, setadminPosts] = useState([]);

    const [registerData, setRegisterData] = useState({
      name: "",
      email: "",
      password: "",
      gender: "",
    });
    const [registerUsers, setRegisterUsers] = useState([]);
    
    const [loginUser, setloginUser] = useState({
        email : "",
        password : ""
    })

    const [loginUsers,setloginUsers] = useState([])

    const [dashboard, setdashboard] = useState("");


    const handleChange = (e) => {
        const {name,value} =e.target;
        console.log('runninggg');
        
        setRegisterData({
            ...registerData,
            [name] : value
        })
    }
    const handleRegister = async(e) => {
        e.preventDefault();
      const response = await axios.post(
        `http://localhost:3000/register`,
        registerData,
        {
          withCredentials: true,
        },
      );
        console.log("data",response.data);
        setRegisterUsers(response.data.user)
        setRegisterData({
          name: "",
          email: "",
          password: "",
          gender: ""
        });
        console.log("Registered");
        navigate("/login")
    }
    // async function fetchProfiles() {
    //     const response = await axios.post(`http://localhost:3000/profile`,loginUser,{
    //         withCredentials : true
    //     })
    //     console.log("fetch profile ===> ",response.data);
    //     setdashboard(response.data.user)
        
    // }
    const fetchProfile = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3000/profile`,
          {},
          {
            withCredentials: true,
          },
        );

        setdashboard(response.data.user);
        return response.data.user
      } catch (error) {
        console.log("error : ", error.message);
      }
      finally{
        setLoading(false)
      }
    };

    useEffect(() => {
      
      fetchProfile()
    }, [])
    
    const handleLoginChange = (e) => {
        const {name,value} = e.target;
        setloginUser({
            ...loginUser,
            [name] : value
        })
    }
    const handleLogin = async(e) => {
        e.preventDefault();
        const response = await axios.post(`http://localhost:3000/login`,loginUser,
            {
                withCredentials : true
            }
        )
      const user =    await fetchProfile();
        if(user?.role === "admin"){
          navigate("/admin")
        }
        else if(user?.role === "student"){
           navigate("/profile");
        }
       
        console.log("====>",response.data);
    }
    
    const handleChangeAdmin = (e) => {
      const {name,value} = e.target;

      setadminPost({
        ...adminPost,
        [name] : value
      })
      
    }
    const handleAdminPost =async(e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`http://localhost:3000/annoucements`,adminPost,
          {
            withCredentials : true
          })
           console.log("responses ===> ", response.data.annoucement);
            setadminPost(response.data.annoucement);
            setadminPost({
              title: "",
              description: "",
              gender: "",
            });
           await fetchAdminAnnouncements();  
             
      } catch (error) {
        console.log("error creating the annoucements ..",error.message);       
      } 
    }

    const fetchAdminAnnouncements = async() => {
     try {
       const response = await axios.get(`http://localhost:3000/admin/annoucements`, {
         withCredentials: true
       });
    
       setadminPosts(response.data.announcements);
      
     } catch (error) {
      console.log("Error fetching the annoucements ...",error.message);
     }   
    }
    
    const fetchAnnoucements = async() => {
      try {
        const response = await axios.get(`http://localhost:3000/annoucements`,{
          withCredentials : true
        });
        console.log("resss ",response);
        setannouncement(response.data.announcements);
        
      } catch (error) {
        console.log("Error fetching the annoucements = ",error.message);
        
      }
    }
    const handleLogout = async()=> {
      try {
        const response = await axios.post(`http://localhost:3000/logout`,
          {},{
            withCredentials : true
          }
        )
        setdashboard(null)
        console.log("Response in logout : ",response.data.message);
        
           setloginUser({
             email: "",
             password: "",
           });
        navigate("/login")
      } catch (error) {
         console.log("Logout error:", error.response?.data || error.message);
      }
    }

    return (
      <UsersContext.Provider
        value={{
          setRegisterData,
          registerUsers,
          registerData,
          setRegisterUsers,
          handleChange,
          handleRegister,
          handleLogin,
          handleLoginChange,
          loginUser,
          dashboard,
          loading,
          adminPost,
          setadminPost,
          adminPosts,
          setadminPosts,
          handleAdminPost,
          handleChangeAdmin,
          fetchAdminAnnouncements,
          fetchAnnoucements,
          announcement,
          handleLogout
        }}
      >
        {children}
      </UsersContext.Provider>
    );
}

