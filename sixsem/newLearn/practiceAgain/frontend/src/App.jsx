import React  from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AllNotes   from "./components/AllNotes";
import Note from "./components/Note"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Note />} />
          <Route path="/helloNotes" element={<AllNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
