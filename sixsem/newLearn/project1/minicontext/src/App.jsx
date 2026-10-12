import {React , useContext} from 'react'
import UserContextProvider from './context/UserContext'
import Home from "./components/Home"
import About from "./components/About"


const App = () => {
  return (
   <UserContextProvider >
    <Home />
    <About />
   </UserContextProvider>

  )
}

export default App
