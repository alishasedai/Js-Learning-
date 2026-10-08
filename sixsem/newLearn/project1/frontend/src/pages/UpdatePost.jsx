import React, { useEffect } from 'react'

const UpdatePost = ({getPost,getUpdatePost,setGetUpdatePost}) => {
    useEffect(() => {
        console.log("I am working..");
        
    },[])
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("i am clicked heheh hohoho hahahaha..");
        
    }
  return (
    <div className='min-h-screen bg-yellow-200 flex flex-col items-center justify-center w-full'>
      
     <div className='flex flex-col items-center justify-center w-full min-h-screen gap-4 '>
        <h2 className='font-semibold text-2xl text-blue-500'>Update Post</h2>
        <div className='bg-blue-500 p-6  '>
         <form action="" className='bg-blue-200 rounded-2xl w-100  h-70 flex items-center justify-center flex-col gap-5 ' onSubmit={handleSubmit}>
        <input className='border-3 py-2 w-80 px-8  rounded-md bg-violet-200 border-amber-200' type="file" name='file' />
        <input  className='w-80 px-8  rounded-md bg-violet-200 py-2 border-amber-200 border-2' type="text" name="caption" placeholder='Enter a caption' id="" />
        <button className='w-80 bg-blue-400 px-7 py-2 rounded-xl' type='submit'>Update</button>
      </form>
     </div>
     </div>
    </div>
  )
}

export default UpdatePost
