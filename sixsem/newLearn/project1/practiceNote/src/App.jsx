import {React ,useState,useEffect} from 'react'

const App = () => {
  const [getInput, setGetInput] = useState({
    task : "",
    priority: ""
  })
  const[getIndex,setGetIndex] = useState(null)
  const[notes,setNotes] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
    if(getIndex !== null){
     const updateNotes = notes.map((val,index) => {
      return index === getIndex ? getInput : val
     })
     setGetIndex(null);
     setNotes(updateNotes)
    }
    else{
       setNotes([...notes,getInput]);
    }
    setGetInput({
      task : "",
      priority : ""
    })
    
  }
  const handleChange = (e) => {
      const {name,value} = e.target;
      setGetInput({
        ...getInput,
        [name] : value
      })
  }
  const handleEdit = (index) => {
    console.log("Hello",index);
    setGetInput({
      ...getInput,
      task : notes[index].task,
      priority : notes[index].priority
    })
    setGetIndex(index)
  }
  const handleDelete = (index) => {
    console.log("Index : ",index);
     const deletes = notes.filter((val,i) => {
      return i !== index 
    })
    setNotes(deletes)
  }
  useEffect(() => {
    console.log("Notes created : ",notes);
   
  
    
  }, [notes])
  
  return (
    <div>
      <div>
        <h2>Create Note</h2>
        <form action="" onSubmit={handleSubmit} >
          <input type="text" name="task"
          value={getInput.task} 
          onChange={handleChange} id="" /><br />
          <input type="text" name="priority"
          value={getInput.priority}
          onChange={handleChange} id="" /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {notes.map((val,index) => {
          return <div key={index}>
            <p>{val.task}</p>
            <p>{val.priority}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        })}
      </div>
    </div>
  );
}

export default App
