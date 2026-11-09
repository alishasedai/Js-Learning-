import {createContext,useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";


export const UsersContext = createContext();

export const UsersContextProvider = ({children}) => {
     const navigate = useNavigate();

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
    async function fetchProfile() {
        const response = await axios.post(`http://localhost:3000/profile`,loginUser,{
            withCredentials : true
        })
        console.log("fetch profile ===> ",response.data);
        setdashboard(response.data.user)
        
    }
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
        await fetchProfile();
        navigate("/profile");
        console.log("====",response.data);
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
          dashboard
        }}
      >
        {children}
      </UsersContext.Provider>
    );
}

