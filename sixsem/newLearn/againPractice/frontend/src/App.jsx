
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import CreateData from './pages/CreateData'
import UsersData from './pages/UsersData'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<CreateData />} />
          <Route path='/showData' element={<UsersData />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
