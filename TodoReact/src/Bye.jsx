import React, { useEffect } from 'react'

const Bye = ({label,handle}) => {
    const data =[{
      id: 0, item : "Apple", price : 1000,       
    },
  {
    id: 1, item : "Banana", price : 2000,
  },
  {
    id: 2, item : "Mango", price : 3000
  }
]
    console.log(data)
    useEffect(() => {
      localStorage.setItem("value",JSON.stringify(data));
    })
    const getData = JSON.parse(localStorage.getItem('value'));
    console.log("getting data from local storage : ",getData)
  return (
    <div>
        <button onClick={handle}>{label}</button>
       
    </div>
  )
}

export default Bye
