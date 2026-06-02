import React from 'react'

const ExpenseItems = ({items,handleDelete}) => {
  return (
    <div>
      <h2>Expenses Itemss</h2>
      <ul>
        {items.map((val,i) => {
          return  <li key={i}>{val.title} - {val.amount} 
          <span onClick={() => handleDelete(i)}>❌</span></li>
        })}
      </ul>
    </div>
  )
}

export default ExpenseItems
