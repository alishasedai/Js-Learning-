import {React,useEffect,useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"

const CreatePost = () => {
  const navigate = useNavigate();
    const [post,setPost] =useState([
      
    ]);

    const handleSubmit =async(e) => {
        e.preventDefault();
        console.log("Button clicked");
        try {
          const formData = new FormData(e.target)
        const d = await axios.post("http://localhost:3000/create-post",formData)
         console.log(" dddddd: ", d);
         navigate("/all-post")
        } catch (error) {
          console.log("Error creating the post : ",error); 
        }  
            
    }
   
    
  return (
    <div>
      hello i am creating post
      <form action="" onSubmit={handleSubmit}>
        <input type="file" name="image" id="" />
        <input type="text" placeholder="Enter caption" name="caption"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost
