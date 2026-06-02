import React, { useEffect, useState } from 'react'

const DynamicListAdd = () => {
    const [list,setList] = useState("");
    const [lists,setLists]=useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLists((prev) => [...prev,list])
        setList("")
        
    }
    useEffect(() => {
        console.log(lists)
    },[lists]);

  const handleDelete = (index) => {
    const dlt = lists.filter((_,i) => i !== index);
    setLists(dlt);
  }
  const deleteAll = () => {
    setLists([]);
    console.log(Date.now())
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text"
        value={list}
        onChange={(e) => setList(e.target.value)}
         />
        <button type='submit'>Add</button>
      </form>
      <button onClick={deleteAll}>Delete All Data</button>
      <ul>
        {
            lists.map((val,i) => {
           return    <li key={i}>{val}
           <span onClick={() => handleDelete(i)} 
            style={{cursor : "pointer"}}>❌</span></li>
            })
        }
      </ul>
    </div>
  )
}

export default DynamicListAdd
