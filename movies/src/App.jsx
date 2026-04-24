import { BrowserRouter as Router,Route, Routes, } from "react-router-dom"

import "./App.css"
import Navbar from "./components/Navbar"
import MovieDetail from "./pages/MovieDetail"
import Home from "./pages/Home"

function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/movieDetails/:id" element={<MovieDetail />}/>
      </Routes>
    </Router>
  
  
  )
}

export default App
