import React from 'react'

const Properties = (props) => {
  return (
    <div>
      <h2>Hello .. {props.name}</h2>
      <p>Age : {props.age}</p>
      <p>City : {props.city}</p>
    </div>
  )
}

export default Properties
