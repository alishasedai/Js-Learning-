import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();
const UserContextProvider = ({children}) => {

    const navigate = useNavigate();

    const [user,setUser] = useState({
        name : "",
        email : "",
        address : ""
    })
    const [users,setUsers] = useState([]);
    const [getIndex,setGetIndex] = useState("");
    const [updateData,setUpdateData] = useState({});

     async function fetchedData() {
       try {
         const response = await axios.get("http://localhost:3000");
         console.log("Data fetched successfully..",response.data.data);      
         setUsers(response.data.data);
         
         
       } catch (error) {
            console.log("Erro fetching the data",error.message);    
       }
    }
    useEffect(() => {
        console.log("users ===> ",users);
    },[users])
    useEffect(() => {
        fetchedData()
    },[])

    const handleChange = (e) => {
        const {name,value} = e.target;

        setUser({
            ...user,
            [name] : value
        })

    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("user : ",user);
        const createData = await axios.post(`http://localhost:3000/createData`,user);
        console.log("Create data ===> ",createData);
        
        setUsers([
            ...users,
            createData.data.data
        ])
        console.log("USers is here ===> ",users);
        
        setUser({
            name : "",
            email : "",
            address : ""
        })
            navigate("/allUser")
        
    }

    const handleDelete = async(index) => {
        console.log("Index",index);
        try {
            const response  = await axios.delete(`http://localhost:3000/deleteData/${index}`);
            await fetchedData();

        } catch (error) {
            console.log("error deleting ..",error.message);
            
        }   
    }
    const handleEdit  =(index) => {
        console.log("data is : ",index);
        const selectedUsers = users.find((u) => u._id === index);
        console.log("Selected users ---->  ",selectedUsers);
        setUpdateData(selectedUsers)
        setGetIndex(index);
        navigate("/editUser")
    }
    
    // useEffect(() => {
    //    console.log("Data needs to be updated they are at here...",updateData);
    // },[updateData])
    const handleUpdate = async(e) => {
        e.preventDefault();
      try {
        const response = await axios.patch(`http://localhost:3000/updateUser/${getIndex}`,user);
      } catch (error) {
        console.log("Error updating the users..");
        
      }


    }
  return(
        <UserContext.Provider value={{user,setUser,users,setUsers,handleChange,handleSubmit,handleDelete,handleEdit,updateData,handleUpdate}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider
