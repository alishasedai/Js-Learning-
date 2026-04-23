import React, { useEffect, useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseItem from './ExpenseItem';  
import ExpenseList from './ExpenseList';

const App = () => {
  const [exp,setExp] = useState(() => {
    const saved = localStorage.getItem("exp");
    return saved ? JSON.parse(saved) : [];
  }
  );
  
  const addExpense = (expense) => {
    setExp((prev) => [...prev,expense])
    
  }
  useEffect(() => {
    localStorage.setItem("exp",JSON.stringify(exp))
  },[exp]);
  console.log(JSON.stringify(exp));
  const deleteExp = (id) => {
    console.log("arg id", id, " exp: ", exp);
    // const newexp = exp.filter((item) => item.id !== id);
    setExp((prev) => {
      return prev.filter((item) => {
      return  item.id !== id}
      )
    })
  
    // setExp(newexp);
  }
  
  const total = exp.reduce((sum, item) => sum + item.amount, 0);
    console.log("Total expenses:", total);


  return (
   <>
   
   <ExpenseForm onAddExpense={addExpense}/>
   <ExpenseItem total={total}  />
   
   <ExpenseList expenses= {exp} deleteExp={deleteExp}/>
   </>
  )
}

export default App
