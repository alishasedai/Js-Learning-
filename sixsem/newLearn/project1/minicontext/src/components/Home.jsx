import {React, useContext  } from 'react'
import { UerContext } from '../context/UserContext';

const Home = () => {
    const {inputs,passwords } = useContext(UerContext);
  return (
    <div>
      {inputs}
      <p>{passwords }</p>
    </div>
  )
}

export default Home
