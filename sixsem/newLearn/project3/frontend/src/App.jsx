import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { StudentContextProvider } from './context/StudentContext'
import CreateStudent from './pages/CreateStudent'
import AllStudent from './pages/AllStudent'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <StudentContextProvider>
        <Routes>
          <Route path='/' element={<CreateStudent />} />
          <Route path='/allStudent' element={<AllStudent />} />
        </Routes>
      </StudentContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
