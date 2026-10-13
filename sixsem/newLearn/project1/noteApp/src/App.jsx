import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
   const [getInput,setGetInput] = useState({
    task : "",
    priority : ""
  });
  const [notes,setNotes] = useState([]);
  const [editIndex,setEditIndex] = useState(null);
  const handleChange = (e) => {
      const {name,value} = e.target;
      setGetInput({
        ...getInput,[name] :value
      })
  
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(editIndex !== null){
      setNotes(notes.map((note,index)=>
      index === editIndex ? getInput : note));
      setEditIndex(null)
    }
    else{
      
    setNotes([...notes,getInput])
    }
    setGetInput({
      task : "",
      priority:""
    })
  }
  useEffect(() => {
    console.log("Notes : ",notes)
  },[notes])
  const handleEdit = (index) => {
    console.log("Index :",index);
    setGetInput({
      task : notes[index].task,
      priority : notes[index].priority
    })
      setEditIndex(index)
  }
  return (
    <div>
      <h2>{editIndex != null ? "Update Note " : "Create the note"}</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='task' value={getInput.task}
        onChange={handleChange} /> <br />
        <input type="text" name='priority' value={getInput.priority}
        onChange={handleChange} /> <br />
        <button type='submit'>Submit</button>
      </form>
      <div>
        {notes.map((value,index) => {
          return <div key={index}>
            <p>{value.task}</p>
            <p>{value.priority}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button>Delete</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
