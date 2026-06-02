import React, { useState } from 'react'

const Button = () => {
    const [isLogged,setIsLogged]= useState(false);

  return (
    <div>
      {isLogged ? (
        <button onClick={() => setIsLogged(false)}>Logout</button>
      ) : <button onClick={() => setIsLogged(true)}>LogIn</button>}
    </div>
  )
}

export default Button
