import React, { useEffect, useState } from 'react'

const SimpleTodo = () => {
    const [todo,setTodo] =useState("");
    const [todos,setTodos] = useState([]);
    const [editIndex,setEditIndex] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editIndex !== null){
          const edits = [...todos];
          edits[editIndex]=todo;
          setTodos(edits);
          setEditIndex(null);

        }
        else{
           setTodos((prev) => ([...prev,todo]))
          
        }
         setTodo("");
       
            
        
    }
    const handleDelete = (index) => {
      console.log(index);
     setTodos((prev) => prev.filter((_,i) => i !== index))
    };

    const handleUpdate = (index) => {
      setTodo(todos[index]);
      setEditIndex(index);
    }
    useEffect(() => {
        console.log(todos);
    },[todos])
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input 
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      type="text" name="" id="" />
      <button type='submit'>Add</button>
      </form>
      <ul>
        {todos.map((val,index) => (
             <li key={index}>{val} 
             <span onClick={() => handleDelete(index)} style={{cursor : "pointer"}}>❌</span> 
             <span onClick={() => handleUpdate(index)} style={{cursor : "pointer"}}>✏️</span></li>
        ))}
      </ul>
    </div>
  )
}

export default SimpleTodo
