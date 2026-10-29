import React  from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AllNotes   from "./components/AllNotes";
import Note from "./components/Note"
import UpdateUser from './components/UpdateUser';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Note />} />
          <Route path="/helloNotes" element={<AllNotes />} />
          <Route path="/updateUser" element={<UpdateUser />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
