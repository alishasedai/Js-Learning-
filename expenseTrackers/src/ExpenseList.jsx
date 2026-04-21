import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses,onDelete}) => {
    if(expenses.length === 0){
        return <p>No Expenses yet</p>
    }
  return (
    <div className="expense-list">
        {expenses.map((item) => (
            <ExpenseItem key={item.id} item={item} onDelete={onDelete}/>
        ))}
      
    </div>
  )
}

export default ExpenseList
