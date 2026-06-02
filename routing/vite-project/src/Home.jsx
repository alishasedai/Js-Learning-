import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    
    const navigate = useNavigate();
    const goToAbout =() => {
        navigate("/about")
    }
  return (
    <div>
      <h1>I am home page</h1>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  )
}

export default Home
