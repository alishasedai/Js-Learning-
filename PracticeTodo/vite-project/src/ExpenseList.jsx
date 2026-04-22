import React from 'react'

const ExpenseList = ({expenses, deleteExp}) => {
  return (
    <div>
      <ul>
       { ...expenses.map((item) => (
         <li key={item.id}>
            <span>{item.expenseTitle} </span>
            <span>Rs. {item.amount} </span>
            <span><button onClick={() => deleteExp(item.id)}>❌</button></span>
        </li>
        ))}
       
      </ul>
    </div>
  )
}

export default ExpenseList
