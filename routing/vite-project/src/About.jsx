import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }
  return (
    <div>
      <h1>Hello I am About page</h1>
      <button onClick={goToHome}>Go To Home</button>
    </div>
  )
}

export default About
