import React from 'react'
import "./App.css";

const Hello = ({name="Guest",age,city= "Unknown" ,hobbies =[]}) => {


return (
    <>
   <h2>Name is : {name}</h2>
   <h2>Age : {age}</h2>
   <h2>City : {city}</h2>
   <ul>
    {hobbies.map((hobby,index) => (
        <li key={index}>{hobby}</li>
    ))}
   </ul>
    </>
)
}

export default Hello
