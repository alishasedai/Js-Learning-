import React ,{useEffect, useState} from 'react'
import {BrowserRouter ,Routes,Route,useNavigate} from "react-router-dom"
import Edit from './Edit';
const Home = ({getInput,setGetInput,note,setNote,handleChange}) => {  
  const navigate = useNavigate();

//   const [getInput,setGetInput] = useState({
//     task : "",
//     important : ""
//   });
//   const [note,setNote] = useState(() => {
//     const savedNotes = localStorage.getItem("notes");
//     return savedNotes ?  JSON.parse(savedNotes) : []
//   });

  const handleSubmit =(e) => {
    e.preventDefault();
    setNote((prev) => ([...prev,getInput])) 
      setGetInput({
    task: "",
    important: ""
  });   
  }
  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(note))
    console.log("Form data : ",note);
  },[note])
  const handleDelete =(i) => {
     setNote((prev) => prev.filter((d,index) => index !== i));
     console.log("data",note);
     
  }
  const handleEdit = (i) => {
    console.log("Index : ",i );
    navigate("/edit")

  }
  
  return (
    <div className='w-full bg-green-400 min-h-screen flex flex-col gap-2 justify-center items-center'>
      <h2>Note app</h2>
      <form className='bg-red-300 flex flex-col p-10 rounded-xl' action="" onSubmit={handleSubmit}>
        <input className='bg-white p-2 -mb-5 rounded-md w-full' type="text" placeholder = "Enter you routine"
         name="task" id=""
         value={getInput.task}
         onChange={handleChange} /> <br /><br />
        <input className='bg-white p-2 rounded-md w-full'  type="text" placeholder="importance" name="important" value={getInput.important} onChange={handleChange} id="" /><br /><br />
        <button  className='text-center bg-blue-300 py-3 rounded-md' type="submit">Submit</button>
      </form>
      <div >
        <h2 className='text-3xl text-center'>Task :</h2>
        {note.map((value,index) => {
     return  <div  className='bg-pink-400 grid grid-cols-3 items-center px-5 gap-20 w-[80%] h-30 rounded-md mb-5' key={index}>
            <p>Task : {value.task}</p>
            <p>Important : {value.important}</p>
            <div className='flex gap-1.5 flex-col'>
              <button onClick={() => handleEdit(index)}  className='bg-yellow-200 px-4 py-1 rounded-xl'>Edit</button>
             <button onClick={() => handleDelete(index)} className='bg-yellow-200 px-4 py-1 rounded-xl'>Delete</button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Home
