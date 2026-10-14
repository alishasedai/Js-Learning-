import React, { useContext, useEffect } from 'react'
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom";
import { NoteContext } from '../context/NoteContext'


const UpdatePost = () => {
  const navigate = useNavigate();

  const {getPost,setGetPost,updatePost,setUpdatePost,caption,setCaption} = useContext(NoteContext);
      const {id} = useParams();
      console.log("Id is getting from the URL : ",id);
      console.log("Get the post at here : ",getPost);
      const selectedPost = getPost.find((p) => p._id === id);
      console.log("Selected Post is at here : ",selectedPost);
      
      useEffect(() => {
          if(selectedPost){
            setCaption(selectedPost.caption)
          }
      }, [selectedPost,setCaption])
      
        const handleSubmit =async(e) => {
        e.preventDefault();
          try{
             const response = await axios.patch(
          `http://localhost:3000/updatePost/${id}`,
          {
            caption: caption,
          },
        );
        
        console.log("Data Alisha : ",response.data);
        setGetPost((oldPosts) => 
          oldPosts.map((val) => {
        return val._id === id ? {...val,caption : caption} : val 
        }))
         navigate("/all-post");
          }
          
          catch(error){
            console.log("Backend Error : ",error.response?.data);
            
          }
        // setGetPost((old) => 
        // old.map((p) => da))
    }
    
    
  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 ">
        <h2 className="font-semibold text-2xl text-blue-500">Update Post</h2>
        <div className="bg-blue-500 p-6  ">
          <form
            action=""
            className="bg-blue-200 rounded-2xl w-100  h-70 flex items-center justify-center flex-col gap-5 "
            onSubmit={handleSubmit}
          >
            <div className="flex  gap-2 w-full ">
              <input
                className="border-3 h-12 py-2 w-60 px-8  rounded-md bg-violet-200 border-amber-200"
                type="file"
                name="file"
                // value={image}
                onChange={(e) => setCaption(e.target.value)}
              />
              {selectedPost && (
                <img
                  className="w-50 h-30"
                  src={selectedPost.image}
                  alt="Current post"
                  width="200"
                />
              )}
            </div>
            <input
              className="w-80 px-8  rounded-md bg-violet-200 py-2 border-amber-200 border-2"
              type="text"
              name="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              id=""
            />
            <button
              className="w-80 bg-blue-400 px-7 py-2 rounded-xl"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdatePost
