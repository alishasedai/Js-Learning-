import React, { useState } from 'react'

const ButtonClicked = () => {
    const [click,setClick] = useState(0);
    const btnClick = () => {
        setClick((prev) => prev+1);

    }
  return (
    <div>
      <button onClick={btnClick}>Button Clicked {click} times</button>
    </div>
  )
}

export default ButtonClicked
