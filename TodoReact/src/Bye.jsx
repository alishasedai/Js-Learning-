import React from 'react'

const Bye = ({label,handle}) => {
    
  return (
    <div>
        <button onClick={handle}>{label}</button>
       
    </div>
  )
}

export default Bye
