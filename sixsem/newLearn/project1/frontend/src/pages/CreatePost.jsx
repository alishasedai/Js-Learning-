import {React,useEffect,useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"

const CreatePost = ({post,setPost}) => {
  const navigate = useNavigate();
    // const [post,setPost] =useState([
    // ]);

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
    <div className="w-full min-h-screen gap-10 flex flex-col justify-center items-center bg-blue-100">
      <div className="bg-blue-400 p-5 rounded-xl ">
        <form
          action=""
          onSubmit={handleSubmit}
          className="bg-white flex justify-center rounded-xl p-10 items-center gap-2.5 h-80 flex-col"
        >
          <input
            type="file"
            className="border-2 py-2 w-80 rounded-md"
            name="image"
            id=""
          />
          <input
            type="text"
            className="mt-5 border-1 py-2 w-80 rounded-md"
            placeholder="Enter caption"
            name="caption"
          />
          <button
            className="mt-5 bg-red-600 py-3 rounded-md px-5 w-80 "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost
