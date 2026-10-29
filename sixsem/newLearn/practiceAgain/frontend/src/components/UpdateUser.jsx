import React ,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const UpdateUser = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state?.user;
    console.log("Users hehe using useLocation:",user);

    const [u,setU] = useState({
        name : user.name,
        address : user.address
    });
  
    const handleChange = (e) => {
        const {name,value} = e.target;
        setU({
            ...u,
            [name] : value
        })
    }
    const handleSubmit =async(e) => {
        e.preventDefault();
         if (!user?._id) {
    console.log("User ID is missing:", user);
    return;
  }
        try {
            const updates = await axios.patch( `http://localhost:3000/updateUser/${user._id}`,u);
        navigate("/helloNotes");
        console.log("Updated successfully oh really ??");
        

        } catch (error) {
            console.log("Error gets : ",error.message);
            
        }

    }
    
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='name'
            value={u.name}
            onChange={handleChange}
             /> <br />
             <input type="text" name='address' 
             value={u.address}
             onChange={handleChange}/><br />
             <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default UpdateUser
