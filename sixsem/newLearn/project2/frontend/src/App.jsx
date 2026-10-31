
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateUser from './pages/CreateUser'
import AllUser from './pages/AllUser'
import EditUser from './pages/EditUser'
import UserContextProvider from './context/UserContext'


const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      <UserContextProvider>
     <Routes>
      <Route path='/' element={<CreateUser />}/>
      <Route path='/allUser' element={<AllUser />} />
      <Route path='/editUser' element={<EditUser />} />
     </Routes>
     </UserContextProvider>
     </BrowserRouter>
    
    </div>
  )
}

export default App
