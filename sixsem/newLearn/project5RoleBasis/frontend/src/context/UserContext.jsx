import {createContext,useState,useEffect} from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
   const navigate = useNavigate();
  const [student, setStudent] = useState({
    std_name : "",
    std_email : "",
    std_password : "",
    std_gender : ""
  });

  const [students,setStudents] = useState([]);

  const handleChange =(e) => {
    const {name,value} = e.target ;
    setStudent({
        ...student,
        [name]:value
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
        navigate("/login")
    } catch (error) {
        console.log("Error ",error.message);
        
    }
  }
  const handleLogin =async(e) => {
    e.preventDefault();
    console.log("hh");
    const loginStd = await axios.post(`http://localhost:3000/login`,student,
        {
            withCredentials : true
        }
    )
    console.log("logins : ",loginStd);
    
  }
  return (
    <UserContext.Provider 
    value={{ 
        student,
        students,
        handleChange,
        handleCreate ,
        handleLogin
        }}>
        {children}</UserContext.Provider>
  );
};