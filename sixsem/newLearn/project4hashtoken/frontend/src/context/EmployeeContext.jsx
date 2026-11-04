import {createContext ,useState,useEffect} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export const EmployeeContext = createContext();
export const EmployeeContextProvider = ({children}) => {
    const navigate = useNavigate();

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const [employees,setEmployees] = useState([]);
    const [employee,setEmployee] = useState({
        emp_name : "",
        emp_email : "",
        emp_password : "",
        emp_gender : "", 
        emp_salary:"",
        emp_role : "",
        emp_position:""
    })
    const[emp_login,setEmp_login] = useState({
        emp_email : "",
        emp_password:""
    })
    const handleChange = (e) => {
        const {name,value} = e.target;
        setEmployee({
            ...employee,
            [name]:value
        })
    }
    const handleRegister =async(e)=> {
        e.preventDefault();
        console.log("click");
        const response = await axios.post(`http://localhost:3000/register`,employee);
        console.log("Emp====> ",response);
        
        // setEmployees([
        //     ...employees,
        //     employee
        // ])
        // setEmployees(response.data.emp_data);
        
        setEmployee({
          emp_name: "",
          emp_email: "",
          emp_password: "",
          emp_gender: "",
          emp_salary: "",
          emp_role: "",
          emp_position: "",
        });
        
    }

 async function fetchEmployee(){
    const getEmp = await axios.get(`http://localhost:3000/`);
    console.log("Gett---> ",getEmp.data.emp_data);
    setEmployees(getEmp.data.emp_data)
    
    }
    useEffect(()=> {
        
        fetchEmployee();
        
    },[])

    useEffect(() => {
      console.log("Employees updated:", employees);
    }, [employees]);

    const handleLogin =async(e) => {
        e.preventDefault();
        console.log("handle Login");
         if (!emp_login.emp_email || !emp_login.emp_password) {
           alert("Please enter email and password");
           return;
         }
      try {
          const loginEmp = await axios.post(
            `http://localhost:3000/login`,
            emp_login,{
              withCredentials : true
            }
          );

          console.log("Employee login data ===> ",loginEmp);
        
          await fetchProfile()

          navigate("/profile");
            
      } catch (error) {
        console.log("error login : ",error.message);
        alert(error.response?.data?.message || "Something went wrong!");
      }
    }
    const handleChangeLogin=(e)=> {
        const {name,value} = e.target;
        setEmp_login({
            ...emp_login,
            [name] : value
        })
    }

    const fetchProfile = async () => {
      setLoading(true)
      try {
        const response = await axios.post("http://localhost:3000/profile",{}, {
          withCredentials: true,
        });
        console.log("respo----> ",response.data);
        

        setUser(response.data.user);
      } catch (error) {
        setUser(null);
        console.log("Profile error:", error.message);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      fetchProfile()
    }, [])
    
    return (
      <EmployeeContext.Provider
        value={{
          employee,
          employees,
          handleChange,
          handleRegister,
          handleLogin,
          emp_login,
          handleChangeLogin,
          user,
          setUser,
          fetchProfile,
          loading
        }}
      >
        {children}
      </EmployeeContext.Provider>
    );
}