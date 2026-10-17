import {React ,useContext} from 'react'
import { NoteContext } from '../context/NoteContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
        const navigate = useNavigate();

      const {getInput,setGetInput,setNotes ,Notes,handleSubmit} = useContext(NoteContext);
      // const handleSubmit = (e) =>{
      //   e.preventDefault();
      //   console.log("I am clicked..");
      //   setNotes((oldNotes ) => [...oldNotes,getInput]);
      //   setGetInput({
      //       task : "",
      //       priority : ""
      //   })
      //   navigate("/all-post")
      // }
      const handleChange = (e) => {
       const {name,value} = e.target;
       setGetInput({
        ...getInput,
        [name] : value
       })
      }
      useEffect(() => {
        console.log("Notes are here ...",Notes);
        
      },[Notes])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md">
        <h2 className="text-2xl">Create Note : </h2>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col w-100 gap-2 bg-red-600 px-10 py-16 rounded-md"
        >
          <input
            className="text-center h-10 rounded-md border-rose-300 bg-red-200"
            type="text"
            name="task"
            value={getInput.task}
            placeholder="enter a task"
            onChange={handleChange}
            id=""
          />
          <input
            className="text-center h-10 rounded-md border-rose-300 bg-red-200"
            type="text"
            name="priority"
            id=""
            value={getInput.priority}
            onChange={handleChange}
            placeholder="enter a priority"
          />
          <button
            className="bg-blue-300 h-10 rounded-md text-white font-semibold text-xl"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home
