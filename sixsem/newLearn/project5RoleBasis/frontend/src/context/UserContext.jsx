import {createContext,useState,useEffect} from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [dash,setDash] = useState(null);

   const navigate = useNavigate();
  const [student, setStudent] = useState({
    std_name : "",
    std_email : "",
    std_password : "",
    std_gender : "",
    std_faculty:""
  });
  const [loginData,setLoginData] = useState({
    std_email : "",
    std_password : ""
  })
  const fetchProfile = async()=>{
    try {
        const response = await axios.post(`http://localhost:3000/profile`,{},
            {
                withCredentials : true
            }
        )
        console.log("Responsessss ",response.data.user);
        setDash(response.data.user)
        
    } catch (error) {
        console.log("error : ",error.message);
        
    }
  }
   useEffect(() => {
     fetchProfile();
   }, []);
  const [students,setStudents] = useState([]);

  const handleRegisterChange =(e) => {
    const {name,value} = e.target ;
    setStudent({
        ...student,
        [name]:value
    })
    
  }
  const handleLoginChange =(e)=> {
    const {name,value} = e.target;
    console.log("dddddd");
    
    setLoginData({
        ...loginData,
        [name] : value
    })
  }
  const handleCreate = async(e) => {
    e.preventDefault();
    console.log("Handle create...");
    try {
        const response = await axios.post(`http://localhost:3000/register`,
            student,
            {withCredentials : true}
        )
        console.log("hhhh ==>",response)
        setStudent({
          std_name: "",
          std_email: "",
          std_password: "",
          std_gender: "",
          std_faculty: ""
        });
        navigate("/login")
    } catch (error) {
        console.log("Error ",error.message);
        
    }
  }
  const handleLogin =async(e) => {
    e.preventDefault();
    console.log("hh");
   try {
    setDash(null)
     const loginStd = await axios.post(`http://localhost:3000/login`, loginData, {
       withCredentials: true,
     });
     console.log("logins : ", loginStd);
     await fetchProfile();
     navigate("/profile")

    
   } catch (error) {
    console.log("Login error : ",error.message);
    
   }
  }

  const handleLogout =async (e) => {
    console.log("handleLogout");
   try {
     const response = await axios.post(`http://localhost:3000/logout`, {
       withCredentials: true,
     });
     console.log("Logoutss...", response.data);
     setDash(null);
     setLoginData({
       std_email: "",
       std_password: "",
     });
     navigate("/login");
   } catch (error) {
    console.log("Logout Error ",);
    
   }
  }
  return (
    <UserContext.Provider
      value={{
        student,
        students,
        handleRegisterChange,
        handleLoginChange,
        loginData,
        handleCreate,
        handleLogin,
        dash,
        handleLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};