import React from 'react'

// const Properties = (props) => {
//     const {name,age,city} = props //Standard props destructing
const Properties = ({name="Guest",age="unknown",city="unknown",hobbies=[]}) => {
  return (
    <div>
      <h2>Hello .. {name}</h2>
      <p>Age : {age}</p>
      <p>City : {city}</p>
      <p>Hobbies:  </p>
        <ul>
        {hobbies.map((hobby,index) => (
            <li>{hobby}</li>
        ))}
        </ul>
     
    </div>
  )
}

export default Properties
