import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [task,setTask] =useState("")
    const [tasks,setTasks] =useState([]);
    const handleTask = (e) => {
        e.preventDefault();
        setTasks((prev) => [...prev,{
            id : Date.now(),
            text : task
        }]);
        setTask("") 
    }
    const deleteTask = (id) => {
            console.log("delete sure??",id)
         console.log(tasks)
        setTasks((prev) => {
            return prev.filter((item) => item.id !== id)
        })
        }
   
  return (
    <div>
      <h2>Manage your daily life task</h2>
      <form action="" onSubmit={handleTask}>
        <input 
        type="text" placeholder='enter your task to do' 
        value={task} 
        onChange={(e) => {
            setTask(e.target.value);
        }}/>
        <button type='submit'>Add</button>
      </form>
      <h3>Task need to do</h3>
      <ul>
       {tasks.map((item,index) => (
        <li key={index.id}>{item.text} <button onClick={() => deleteTask(item.id)}><span>❌</span></button></li>
       ))}
      </ul>
     
     

    </div>
  )
}

export default Todo
