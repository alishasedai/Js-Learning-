import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from "uuid";
import Hello from './Hello';
import Bye from './Bye';
import ToggleText from './ToggleText';
import LikeBtn from './LikeBtn';
import UserProfile from './UserProfile';
import MultiForm from './MultiForm';
import AdvanceForm from './AdvanceForm';
import Uncontrolled from './Uncontrolled';
import Todo from './Todo';
import Calculate from './Calculate';
import SimpleCalulator from './SimpleCalulator';
import ChangeBackground from './ChangeBackground';
import ShoppingCart from './ShoppingCart';
import PracticeEffect from './PracticeEffect'
import SearchStudent from './SearchStudent';

function App() {
 
const [note,setNote] = useState("");
const [notes, setNotes] = useState(() => {
  const saved = localStorage.getItem("notes");
  return saved ? JSON.parse(saved) : [];
});
const[showFinished,setShowFinished] = useState(true);


useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);

const toggleFinished = () => {
  setShowFinished(!showFinished)

}
const handleAdd = () => {
  setNotes([...notes, {id:uuidv4() , note, isCompleted : false}])

setNote("")
}
const handleEdit = (index) => {
  let t = notes.filter(i => i.id === index)
  setNote(t[0].note)
 let newTodos = notes.filter((val,i) => {
    
    return val.id !== index;
    
  })
  
  setNotes(newTodos);

}
const handleDelete = (index) => {
  let newTodos = notes.filter((val,i) => {
    
    return val.id !== index;
    
  })

  setNotes(newTodos);
  
}
const hanldeCheckBox = (e) => {
  let id = e.target.name
  
  let index = notes.findIndex((item) => {
    return item.id === id
  })
  let newNotes = [...notes]
  newNotes[index].isCompleted = !newNotes[index].isCompleted
  setNotes(newNotes)
  
}
const hobbies = ["Reading", "Singing", "Coding", "Walking"];
const handleMessage = () => {
        alert("Hello Form Message Box");
    }
    const handleBye = () => {
      alert("Bye from Bye message box!");
    }
  return (
    // <>
    //   <Navbar />
    //   <div className='container w-1/2 min-h-[80vh] mx-auto my-5 rounded-xl p-5 bg-violet-200'>
    //     <div className="addTodo">
    //       <h2 className="text-lg font-bold mx-4">Add a Todo</h2>
          
    //       <input type="text" className="text-sm h-10 w-1/2 mx-4 rounded-md mb-4"
    //       value={note}
    //       onChange={(e) => setNote(e.target.value)}/>
    //       <br />
    //       <button className='w-1/2 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-700 mx-4 font-bold py-1 p-3 rounded-md text-white'
    //       onClick={handleAdd}
    //       disabled={note.length <3 }>Add</button>
    //     </div>
    //     <input className='m-4' type='checkbox' 
    //     checked={showFinished}
    //     onChange={toggleFinished}/>Show Finished
    //       <h2 className='mx-4 text-lg font-bold'>Your Todos</h2>
          
    //     <div className="todos mx-4 ">
    //       {notes.length === 0 && <div className='m-5 text-blue-600'>No Todos to display.</div>}
    //       {notes.map((val,i) => {
    //      return (showFinished || !val.isCompleted) && <div className="todo flex justify-between w-[490px] m-2">
    //      <div className='flex gap-4 items-center'>
    //        <input type='checkbox'
    //       name={val.id}
    //       onChange={hanldeCheckBox}
    //       value={val.isCompleted} />
    //         <div className={val.isCompleted ? "line-through" : "" }
    //         >  
    //           {val.note}
    //         </div>
    //      </div>
    //         <div className="button mx-4 flex h-full">
    //           <button className='bg-violet-700 mx-2 font-bold py-1 p-3 rounded-md text-white'
    //           onClick={() => handleEdit(val.id)}>Edit</button>
    //           <button className='bg-violet-700 mx-2 font-bold py-1 p-3 rounded-md text-white'
    //           onClick={() => handleDelete(val.id)}>Delete</button>
    //         </div>
    //       </div>
    //        })}
    //     </div>

    //   </div>

    
    // </>
    <>
    {/* <Hello name="Alisha sedai" age="21" city="Kathmandu" hobbies = {hobbies}/>
    <Hello age="22" /> */}
    {/* <Bye label="click me" handle={handleMessage}/> /
    <Bye label="Just Click me" handle={handleBye} /> 
    {/* <ToggleText /> */}
      {/* <LikeBtn /> */}
      {/* <UserProfile /> */}
      {/* <MultiForm /> */}
      {/* <AdvanceForm /> */}
      {/* <Uncontrolled /> */}
      {/* <Todo /> */}
      {/* <Calculate /> */}
      {/* <SimpleCalulator /> */}
      {/* <ChangeBackground /> */}
      {/* <ShoppingCart /> */}
      {/* <PracticeEffect /> */}
      {/* <Bye label="Just Click me" handle={handleBye} /> */}
      <SearchStudent />
      </>
  )
}

export default App
