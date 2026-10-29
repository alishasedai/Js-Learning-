import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

 
const CreateData = () => {
    const navigate = useNavigate();

       const fetchData =async() => {
        try {
        const getData = await axios.get("http://localhost:3000"); 
        console.log("Get data :",getData.data.allData);  
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
    const handleSubmit =(e) => {
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
        setUsers([
            ...users,
            user
        ])
        setUser({
            name : "",
            email :"",
            address : ""
        })
        createData();

        navigate("/showData")
    }
    
    useEffect(() => {
        fetchData();
        console.log("users is at herer..",users);
        
    },[users])
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text"
            name='name'
            value={user.name}
            onChange={handleChange} />
            <br />
              <input type="text"
            name='email'
            value={user.email}
            onChange={handleChange} /> <br />
              <input type="text"
            name='address'
            value={user.address}
            onChange={handleChange} /> <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreateData
