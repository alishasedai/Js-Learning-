import { useState,useEffect,React} from 'react'
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from './Home'
import Edit from './Edit'

const App = () => {
  
    const [getInput,setGetInput] = useState({
      task : "",
      important : ""
    });
    const [note,setNote] = useState(() => {
      const savedNotes = localStorage.getItem("notes");
      return savedNotes ?  JSON.parse(savedNotes) : []
    });
      const handleChange = (e) => {
    setGetInput({
      ...getInput,
      [e.target.name] : e.target.value
    })
  }
  return (
   <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home getInput={getInput} setGetInput={setGetInput} note={note} setNote={setNote} handleChange={handleChange}/>} />
        <Route path='/edit' element={<Edit getInput={getInput} handleChange={handleChange} />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
