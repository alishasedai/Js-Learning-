import {React } from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import { NoteContextProvider } from './context/NoteContext'
import Home from './pages/Home'
import AllNote from './pages/AllNote'


const App = () => {
  return (
    <NoteContextProvider>
    <Router>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/all-post' element={<AllNote />} />
      </Routes>
    </Router>
    </NoteContextProvider>
  )
}

export default App
