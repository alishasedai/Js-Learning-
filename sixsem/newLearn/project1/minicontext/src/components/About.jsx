import {React ,useContext} from 'react'
import { UserContext } from '../context/UserContext'
const About = () => {
    const {name} = useContext(UserContext);
  return (
    <div>
      hello i am from About component
      I am Change : {name}
    </div>
  )
}

export default About
