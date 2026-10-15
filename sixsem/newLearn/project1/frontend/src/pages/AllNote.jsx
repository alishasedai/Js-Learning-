import { useContext, useEffect } from "react";
import { NoteContext } from "../context/NoteContext";
import {  useNavigate } from "react-router-dom";

const AllNote = () => {
    const navigate = useNavigate();
  const { Notes ,setGetInput ,getInput ,handleEdit,handleDelete} = useContext(NoteContext);

  useEffect(() => {
    console.log("AllNote mounted");
    console.log("Notes received:", Notes);

  }, [Notes]);
  

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <h2 className="text-3xl mb-4 font-semibold text-blue-600">All Notes here...</h2>
      <div className='grid grid-cols-3 w-130 text-center mb-3 gap-20 border-2'>
        <div className='bg-green-200 py-3'>Task</div>
        <div className='bg-red-200 py-3'>Priority</div>
        <div className='bg-green-200 py-3'>Action</div>
      </div>
      {Notes.map((val,index) => {
        return <div key={index} className='border-amber-300 border w-130 py-2 grid mb-2 grid-cols-3 gap-20'>
            <p>{val.task}</p>
            <p>{val.priority}</p>
            
            <div className="flex gap-1">
                <button onClick={() => handleEdit(val._id)} className="bg-green-300 p-2 rounded-md"> Edit</button>
                <button onClick={() => handleDelete(val._id)} className="bg-red-600 p-2 rounded-md">Delete</button>
            </div>
        </div>

      })}
      <button className="bg-blue-200 p-3 rounded-2xl" onClick={() => navigate("/")}>Create New Note</button>
    </div>
  )
};

export default AllNote;