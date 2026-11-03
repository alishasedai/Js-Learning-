import React,{useState} from 'react'
import axios from "axios";
const Register = () => {
    const [data,setData] = useState({
        name : "",
        email : "",
        password : ""
    })
    const [datas,setDatas] = useState([]);
    const handleChange = (e) => {
        const {name,value} = e.target;
        setData({
            ...data,
            [name]:value
        })

    }
    const handleRegister = async(e) => {
        e.preventDefault();
        
        const response = await axios.post(`http://localhost:3000/register`,data);
        console.log("Register ",response);
        
    }

  return (
    <div>
      Register here
      <form action="" onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register
