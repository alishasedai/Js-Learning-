import React, { useState } from 'react'

const Todo = () => {
    const [newTodo,setNewTodo] = useState("");
    const[todos,setTodos] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTodo){
            setTodos([...todos,{text : newTodo, isCompleted : false}]);
            setNewTodo("")
        }
        console.log(todos)
        
    }
    const handleDelete = (index) => {
        const todoo = [...todos];
        todoo[index].isCompleted = !todoo[index].isCompleted
        setTodos(todoo);
        console.log(todoo[index].isCompleted)
    }
  return (
    <div>
      <h1>Todo App</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Add new todo' value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)}/>
        <button type='submit' style={{backgroundColor : "blue",color : "white" ,padding : "6px", borderRadius : "5px"}}>Add Todo</button>
      </form>
      <ul>
        {todos.map((value,index) => {
           return <li key={index} style={{margin : "5px"}}>
                <span style={{marginRight : "5px", textDecoration : value.isCompleted ? "line-through" : "none"}}>{value.text}</span>
                <button style={{backgroundColor : "blue",color : "white" ,padding : "6px", borderRadius : "5px"}} onClick={() => handleDelete(index)}>Delete</button>
            </li>
        })}
      </ul>
    </div>
  )
}

export default Todo
