import {React,useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { NoteContext } from "../context/NoteContext";

const UpdatePage = () => {
    const navigate = useNavigate();
    const {getInput,setGetInput,Notes,setNotes,handleSubmit} = useContext(NoteContext)
    console.log("Notes in update page : ",Notes);
    console.log("Hahahahehhe ");

      const handleChange = (e) => {
        const { name, value } = e.target;
        setGetInput({
          ...getInput,
          [name]: value,
        });
      };
    
  return (
    <div className="flex items-center justify-center mt-20">
         <form action="" onSubmit={handleSubmit} className='flex flex-col w-100 gap-2 bg-red-600 px-10 py-16 rounded-md'>
                <input className='text-center h-10 rounded-md border-rose-300 bg-red-200' 
                type="text" 
                name="task"
                value={getInput.task}
                placeholder='enter a task'
                onChange={handleChange}
                id="" />
                <input className='text-center h-10 rounded-md border-rose-300 bg-red-200'
                type="text" 
                name="priority" 
                id="" 
                value={getInput.priority}
                onChange={handleChange}
                placeholder='enter a priority' />
                <button className='bg-blue-300 h-10 rounded-md text-white font-semibold text-xl' type='submit'>Update</button>
            </form>
    </div>
  );
}

export default UpdatePage
