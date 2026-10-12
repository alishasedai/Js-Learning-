import {React, useState} from 'react'
import  CreatePost  from "./pages/CreatePost";
import AllPost from "./pages/AllPost"
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import UpdatePost from './pages/UpdatePost';
import { NoteContextProvider } from './context/NoteContext';

const App = () => {
  return (
  <NoteContextProvider>
      <div className="h-screen ">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<CreatePost />} />
          <Route path='/all-post' element={<AllPost />}/>
          <Route path='/update-post/:id' element={<UpdatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  </NoteContextProvider>
  );
}

export default App
