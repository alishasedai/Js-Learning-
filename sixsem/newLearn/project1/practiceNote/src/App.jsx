import {React ,useState,useEffect} from 'react'

const App = () => {
  const [ins,setIns] = useState({
    task : "",
    priority : ""
  })
  const[notes,setNotes] = useState([]);
  const [getIndex,setGetIndex] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I am clicked..");
    console.log("Inputs : ",ins);
    
    if(getIndex !== null){
      const updateNote = notes.map((value,index) => (index === getIndex ) ? ins : value) //this value variables make unchangeable to other codes hehhehe hahah
      setNotes(updateNote)
      setGetIndex(null);
    }
    else{
      setNotes([...notes, ins]);
    }
    setIns({
      task : "",
      priority : ""
    })
    
  }
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setIns({...ins,
      [name] : value
    })
  }
  const handleEdit = (index) => {
    console.log("Index : ",index);
    setIns({
      ...ins,
      task : notes[index].task,
      priority : notes[index].priority
    })
    setGetIndex(index)
    
  }
  useEffect(() => {
   console.log("Notes : ",notes)
  }, [notes])
  
  return (
    <div>
      {getIndex !== null ? " Update task :" : "Create the task"}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={ins.task}
          onChange={handleChange}
          id=""
        />{" "}
        <br />
        <input
          type="text"
          name="priority"
          value={ins.priority}
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Task is shown here</h2>
      {notes.map((value, index) => {
        return (
          <div key={index}>
            <p>{value.task}</p>
            <p>{value.priority}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App
