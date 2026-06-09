import React, { useState } from 'react'

const Calculate = () => {
    const [inputData,setInputData] = useState("");
    const [calculate,setCalculate] = useState(null);
    const getData = (e) => {
        e.preventDefault();
        console.log("CLickedddd")
        const gets = parseInt(inputData);
        const converts = (9*gets/5)+32;
        setCalculate(converts);
        
    }
  return (
    <div>
      <form action="" onSubmit={getData}>
        <input type="text"
         name="" id="" 
         value={inputData}
         onChange={(e) => setInputData(e.target.value)}
         />
         <button type="submit">Convertsss</button>
      </form>
      {calculate !== null && <p>Converted value : {calculate}</p>}
    </div>
  )
}

export default Calculate
