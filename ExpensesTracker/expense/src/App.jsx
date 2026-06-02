// import React from 'react'
// import ExpenseForm from './ExpenseForm'
// import ExpenseList from './ExpenseList'
// import ExpenseItems from './ExpenseItems'
// import { useState,useEffect } from 'react'

// const App = () => {
//    const [item,setItem] =useState({
//     title : "",
//     amount : ""
//   });
//   const [items,setItems]=useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//       setItems((prev) => 
//         [...prev,item]
//     )
//       setItem({
//         title : "",
//         amount : ""
//       })

//   }
//   useEffect(() => {
//     console.log(items)
//   },[items])
//   const handleChange = (e) => {
//     const {name,value} = e.target;
//     setItem((prev) => ({
//       ...prev,
//       [name] : value
//     }))
    
//   }
//   const handleDelete = (index) => {
//     const newItems = items.filter((_, i) => index !== i);
//    setItems(newItems);
//    console.log("newItems", newItems);
//   }

//     const total = items.reduce((acc,curr) => {
//       console.log(typeof curr.amount)
//       return acc + parseInt(curr.amount);
//     }, 0)
//     console.log(total)
  

//   return (
//     <div>
//       <h2>Expense Tracker</h2>
//       <ExpenseForm  item={item} handleChange={handleChange}  handleSubmit={handleSubmit}/>
//       <ExpenseList  />
//       <ExpenseItems handleDelete={handleDelete} items={items}/>
//       <div>
//         {
//           total
//         }
//       </div>
//     </div>
//   ) 
// }

// export default App
import React from 'react'
import PropPractice from './PropPractice'
import ButtonClicked from './ButtonClicked'
import ToggleMessage from './ToggleMessage'
import SimpleTodo from './SimpleTodo'
import PropsData from './PropsData'
import Button from './Button'
import UpdateObject from './UpdateObject'
import DynamicListAdd from './DynamicListAdd'
import ShoppingCart from './ShoppingCart'

const App = () => {
   const name ="Sarita"
   const age = 20;

  return (
   
    <div>
      {/* <PropPractice name={name}/>
      <ButtonClicked />
      <ToggleMessage /> */}
      {/* <SimpleTodo />
      <PropsData name={name} age={age}/>
      <Button /> */}
      {/* <UpdateObject /> */}
      {/* <DynamicListAdd /> */}
      <ShoppingCart />
    </div>
  )
}

export default App
