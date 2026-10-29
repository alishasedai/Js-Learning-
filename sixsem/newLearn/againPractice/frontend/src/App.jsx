
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import CreateData from './pages/CreateData'
import UsersData from './pages/UsersData'
import { UserContextProvider } from './context/UserContext'
import EditData from './pages/EditData'
const App = () => {
  return (
    <div>
     
        <Router>
           <UserContextProvider> 
        <Routes>
          <Route path='/' element={<CreateData />} />
          <Route path='/showData' element={<UsersData />} />
          <Route path='/editData' element={<EditData />}/>
        </Routes>
         </UserContextProvider>
      </Router>
     
    </div>
  )
}

export default App
