import {React } from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import { NoteContextProvider } from './context/NoteContext'
import Home from './pages/Home'
import AllNote from './pages/AllNote'
import UpdatePage from './pages/UpdatePage'


const App = () => {
  
  return (
    <Router>
      <NoteContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-post" element={<AllNote />} />
          <Route path="/update-post" element={<UpdatePage />} />
        </Routes>
      </NoteContextProvider>
    </Router>
  );
}

export default App
