import {useState} from 'react'

const Todo = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todo,setTodo] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTodo){
            setTodo([...todo,{text:newTodo, completed: false}])
            setNewTodo("")
        }
        


    }
    const handleDelete = (index) => {
        const newT = [...todo];
        newT[index].completed = !newT[index].completed;
        setTodo(newT);
    }
  return (
    <div>
      <h2>Todo App</h2>
      <form action="" onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Add new todo' 
        value={newTodo}
        onChange={(e) => 
            setNewTodo(e.target.value)
        } /><br />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
            {todo.map((todos,index) => (
                <li key={index}>    
                    <span 
                    style={{textDecoration : todos.completed ? "line-through" : "none"}}>{todos.text}</span>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
            ))}
        
      </ul>
    </div>
  )
}

export default Todo
