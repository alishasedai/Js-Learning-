import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const gotoAbout =() => {
        navigate("/about")
    }
  return (
    <div>
      <h2>Home page</h2>
      <button onClick={gotoAbout}>Click here </button>

    </div>
  )
}

export default Home
