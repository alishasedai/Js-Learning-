import {React,useEffect,useState} from 'react'
import axios from "axios";

const CreatePost = () => {
    const [post,setPost] =useState([
      
    ]);


    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("Button clicked");
        
    }
    // useEffect(() => {
    //  const response = axios.post("https:localhost:3000/create-post");
     
     
    // }, [post])
    
  return (
    <div>
      hello i am creating post
      <form action="" onSubmit={handleSubmit}>
        <input type="file" name="" id="" />
        <input type="text" placeholder="Enter caption" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost
