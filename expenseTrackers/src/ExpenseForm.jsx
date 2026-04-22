import React, { useRef, useState } from 'react'

const ExpenseForm = ({onAddExpense}) => {
    const [title,setTitle] = useState("");
    const [amount, setAmount] =useState("");
    const titleRef = useRef();

    // const handleSubmits = (e) => {
    //     e.preventDefault();
    //     if(!title || !amount) return "please fill all the fields";
    //     const newExpenses = {
    //         id : Date.now(),
    //         title,
    //         amount : parseFloat(amount)
    //     }
    //     onAddExpense(newExpenses);
    //     setTitle("");
    //     setAmount("")
    //     titleRef.current.focus();
    // }
    const handleSubmit = () => {
      if(!title || !amount) return "Please fill out this all";

      const newExpenses = {
        id : Date.now(),
        title ,
        amount : parseFloat(amount)
      }
      onAddExpense(newExpenses);
      setTitle("");
      setAmount("");
      titleRef.current.focus();
    }
  return (
    <div>
        <form action="" className="expense-form" onSubmit={handleSubmit}>
          <input ref={titleRef} placeholder='Expense Title' type="text" name="" id="" value={title}
          onChange={(e) => setTitle(e.target.value)}/>
          <input type="number" value={amount} placeholder='Amount Rs.' onChange={(e) => setAmount(e.target.value)}  name="" id="" />
          <button type='submit'>Add Expense</button>
        </form>
    </div>
  )
}

export default ExpenseForm
