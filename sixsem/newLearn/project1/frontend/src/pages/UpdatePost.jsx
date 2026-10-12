import React, { useContext, useEffect } from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import { NoteContext } from '../context/NoteContext'


const UpdatePost = () => {

  const {getPost,setGetPost,updatePost,setUpdatePost,caption,setCaption} = useContext(NoteContext);
      const {id} = useParams();
      console.log("Id is getting from the URL : ",id);
      console.log("Get the post at here : ",getPost);
      const selectedPost = getPost.find((p) => p._id === id);
      console.log("Selected Post is at here : ",selectedPost);
      
      // useEffect(() => {
      //  if(selectedPost){
      //   setCaption({selectedPost.caption,
      //     selectedPost.file
      //   })
      //  }
      // }, [setCaption,selectedPost])
      
    

    const handleSubmit =async(e) => {
        e.preventDefault();
        console.log("i am clicked heheh hohoho hahahaha..");
        const response = await axios.patch(
          `http://localhost:3000/updatePost/${id}`,
          {
            caption: caption,
          },
        );
        console.log("Data Alisha : ",response.data);
        
        // setGetPost((old) => 
        // old.map((p) => da))
    }
    
    
  return (
    <div className='min-h-screen bg-yellow-200 flex flex-col items-center justify-center w-full'>
      
     <div className='flex flex-col items-center justify-center w-full min-h-screen gap-4 '>
        <h2 className='font-semibold text-2xl text-blue-500'>Update Post</h2>
        <div className='bg-blue-500 p-6  '>
         <form action="" className='bg-blue-200 rounded-2xl w-100  h-70 flex items-center justify-center flex-col gap-5 ' onSubmit={handleSubmit}>
        <input className='border-3 py-2 w-80 px-8  rounded-md bg-violet-200 border-amber-200' type="file" name='file' 
        value={selectedPost.image}
        onChange = {(e) => setCaption(e.target.value)}
        />
        <input  className='w-80 px-8  rounded-md bg-violet-200 py-2 border-amber-200 border-2' type="text" name="caption" value={caption}  onChange={(e) => setCaption(e.target.value)}  id="" />
        <button className='w-80 bg-blue-400 px-7 py-2 rounded-xl' type='submit'>Update</button>
      </form>
     </div>
     </div>
    </div>
  )
}

export default UpdatePost
