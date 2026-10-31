import React, { Children, createContext, useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export const UserContext = createContext();
import axios from 'axios';

export const UserContextProvider = ({children}) => {
     const navigate = useNavigate();
    const [getIndex,setGetIndex] = useState("");

       const fetchData =async() => {
        try {
        const getData = await axios.get("http://localhost:3000"); 
        console.log("Get data :",getData.data.allData);
        setUsers(getData.data.allData
        )  
        } catch (error) {
            console.log("error gets from the frontend",error.message);
        }

    }
    const [user,setUser]=useState({
        name :"",
        email :"",
        address : ""
    })
    const [users,setUsers] = useState([]);
   
    const handleChange = (e) => {
        const {name,value} = e.target;
        console.log("I am hheh");
        setUser({
            ...user,
            [name] : value
        })
        
    }
    const handleSubmit =async(e) => {
        e.preventDefault();

         const createData = async() => {
   try {
     const response = await axios.post("http://localhost:3000/createUser",user);
     console.log("Response hehehe : ",response.data.data);
     
   } catch (error) {
    console.log("data created");
    
   }


}
        console.log("......");
        // setUsers([
        //     ...users,
        //     user
        // ])
        // setUser([
        //     ...users,response.data
        // ])
        setUser({
            name : "",
            email :"",
            address : ""
        })
       await createData();

        navigate("/showData")
    }
    
    useEffect(() => {
        fetchData();
        console.log("users is at herer..",users);
        
    },[])
    const handleEdit =async(index) => {
        console.log("Edit it hehehe");
        console.log("indx",index);
        setGetIndex(index);
        navigate("/editData")
        
             
    }
    const handleUpdate =async(e,data) => {
        e.preventDefault();
        console.log("Data .....",data);
        
      try {
          const response = await axios.patch(
            `http://localhost:3000/updateUser/${getIndex}`,
            data
          );
          console.log("i dont know i am working or not ???");
          
          console.log("responses ===> ",response.data);
             await fetchData();
          
          console.log("All the users : ",allTheUsers);
          
      } catch (error) {
            console.log("error updating..");
            
      }
      navigate("/showData")

    }
    const handleDelete = async(index) => {

       try {
         console.log("delete id :",index);
        const deletes = await axios.delete(`http://localhost:3000/deleteUser/${index}`);

        await fetchData();
        console.log("deleted successfully");
        
        
       } catch (error) {
        console.log("Error deleting ...",error.message);
        
       }
        
    }
    return (
        <UserContext.Provider value={{user,setUser,users,setUsers,handleChange,handleSubmit,handleEdit,getIndex,handleUpdate,handleDelete}}>
                {children}
        </UserContext.Provider>
    )
}