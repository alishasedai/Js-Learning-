import { createContext ,useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export const StudentContext = createContext();

export const StudentContextProvider =({children}) => {
    const navigate = useNavigate();
    const [updateStudent, setUpdateStudent] = useState({
      name: "",
      email: "",
      password: "",
      address: "",
    });
    const [student,setStudent] = useState({
        name : "",
        email : "",
        password : "",
        address : ""
    })
    
    const [students,setStudents] = useState([]);

    const fetchedData = async() => {
       try {
         const response = await axios.get(`http://localhost:3000/getAllStudent`);
         console.log("rr ==",response.data.alldata);
         setStudents(response.data.alldata)
         
       } catch (error) {
        console.log("Error ==> ",error.message); 
       }
    }
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setStudent({
            ...student,
            [name] : value
        })
    }

    const handleSubmit = async(e) => {

        e.preventDefault();
        const createData = await axios.post(`http://localhost:3000/createStudent`,student)
        console.log("create data ==>",createData);
        
        // setStudents(

        //     [
        //         ...students,
        //         createData
        //     ]
        // )
        setStudent({
        name : "",
        email : "",
        password : "",
        address : ""  
        })
        console.log("Hello done");
        
      await fetchedData();
      navigate("/allStudent")
    }
    useEffect(()=> {
        

        fetchedData();
    },[])

    const handleDelete = async(index) => {
        console.log("data index",index);
       try {
         const deleteStudent = await axios.delete(`http://localhost:3000/deleteStudent/${index}`)
        await fetchedData();
       } catch (error) {
            console.log("Error delete the student data",error.message);
            
       }
        
    }
    const fetchSingleStudent = async (id) => {
        try {
           const gets = await axios.get(
             `http://localhost:3000/getStudent/${id}`,
           );
           setUpdateStudent(gets.data.data); 
        } catch (error) {
            console.log("Error fetching student:", error.message);
            
        }
    }
    const handleEdit =(index) => {
        console.log("Index :",index);
        const stds = students.find((val,id) => val._id === index);
        console.log("Studss : ",stds);
        setUpdateStudent(stds);

        navigate("/editStudent/"+index)   
    }
    const handleUpdate =async (e,index)=> {
        e.preventDefault();
        const updates  =await axios.patch(`http://localhost:3000/editStudent/${index}`,updateStudent);
        console.log("Updates : ",updates);
        
        console.log("Updated successfully...");
        await fetchedData();
        navigate("/allStudent")
        
    }
    const updateHandleChange =(e) => {
        const {name,value} = e.target;
        setUpdateStudent(
            (prev) => ({
                ...prev ,
                [name]:value
            })
        )
    }
    return (
      <StudentContext.Provider
        value={{
          student,
          students,
          handleChange,
          handleSubmit,
          handleDelete,
          handleEdit,
          updateStudent,
          handleUpdate,
          updateHandleChange,
          fetchSingleStudent,
        }}
      >
        {children}
      </StudentContext.Provider>
    );
}
