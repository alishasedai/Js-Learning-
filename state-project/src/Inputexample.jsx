import React from 'react'
import { useState } from 'react'

const Inputexample = () => {
    const [name,setName] = useState(" ");
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <h2>Hello !!{name}</h2>
    </div>
  )
}

export default Inputexample
