import {React , useContext} from 'react'
import { UerContext } from '../context/UserContext'
const About = () => {
   const {inputs,passwords} = useContext(UerContext)
  return (
    <div>
      {inputs}
      <p>{passwords}</p>
    </div>
  )
}

export default About
