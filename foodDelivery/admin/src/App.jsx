import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Route, Routes} from "react-router-dom";
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
 import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const url = "http://localhost:4000";
  return (
    <div className='w-[90%] mx-auto'>
      <ToastContainer />
      <Navbar />
      <hr />
     <div className='app-content flex '>
       <Sidebar />
       <Routes>
        <Route path='/add' element={<Add url={url}/>}/>
        <Route path='/list' element={<List url={url} />}/>
        <Route path='/orders' element={<Orders />}/>

       </Routes>
     </div>
    </div>
  )
}

export default App
