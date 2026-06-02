import React, { useEffect, useState } from 'react'

const ExpenseForm = ({handleChange,handleSubmit,item}) => {
 
  
  
  return (
    
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" 
         name="title" id=""
          placeholder='title'
          value={item.title} 
          onChange={handleChange}/>

        <input type="text" 
        value={item.amount}
        name="amount"
         placeholder='amount'
         onChange={handleChange} />
        <button >Add</button>
      </form>
    </div>
  )
}

export default ExpenseForm