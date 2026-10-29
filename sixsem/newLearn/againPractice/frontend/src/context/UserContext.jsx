import React, { Children, createContext, useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export const UserContext = createContext();
import axios from 'axios';

export const UserContextProvider = ({children}) => {
     const navigate = useNavigate();

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
    const handleEdit =(index) => {
        console.log("Edit it hehehe");
        console.log("indx",index);
        navigate("/editData")
        
        
    }
    return (
        <UserContext.Provider value={{user,setUser,users,setUsers,handleChange,handleSubmit,handleEdit}}>
                {children}
        </UserContext.Provider>
    )
}