import React from 'react'
import { useState } from 'react'

const ExpenseForm = ({onAddExpense}) => {
    const [data,setData] = useState({
        expenseTitle : "",
        amount:""
    })
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CLicked.")
     if(!data.expenseTitle || !data.amount){
        return "Please enter the fields"
    }
    const newExpenses = {
        id : Date.now(),
        expenseTitle : data.expenseTitle,
        amount : Number(data.amount)
    }
    onAddExpense(newExpenses);
    setData({expenseTitle : "", amount : ""})

    
   }

  return (
    <form action="" onSubmit={handleSubmit}>
        <h2>Expense Records</h2>
        <label htmlFor="">Expenses : </label>
        <input
         type="text"
         name="expense" 
         placeholder=' enter expenses'
         value={data.expenseTitle} 
         onChange={(e) => 
         setData({
            ...data,
            expenseTitle : e.target.value
         })}/>
    <br />
    <label htmlFor="">Amount : </label>
         <input 
         placeholder=' enter amount'
          type="text"
          name='amount'
          value={data.amount}
          onChange={(e) => setData({
            ...data,
             amount : e.target.value
          })}
          />
          <br />
          <button type='submit'>Add Expenses</button>
    </form>
  )
}

export default ExpenseForm
