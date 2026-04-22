import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseItem from './ExpenseItem';  
import ExpenseList from './ExpenseList';

const App = () => {
  const [exp,setExp] = useState([]);
  const addExpense = (expense) => {
    setExp((prev) => [...prev,expense])
    
  }
  console.log(exp);
  const deleteExp = (id) => {
    setExp((prev) => {
    return prev.filter((item) => {
        item.id !== id
      })
    })
  }

  return (
   <>
   <ExpenseForm onAddExpense={addExpense}/>
   <ExpenseItem   />
   <ExpenseList expenses= {exp} deleteExp={deleteExp}/>
   </>
  )
}

export default App
