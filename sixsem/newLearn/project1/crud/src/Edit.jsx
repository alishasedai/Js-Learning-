import React from 'react'

const Edit = ({getInput,handleChange}) => {

      const handleSubmit =(e) => {
    e.preventDefault();
    setNote((prev) => ([...prev,getInput])) 
      setGetInput({
    task: "",
    important: ""
  });   
  }
  return (
    <div className='flex flex-col min-h-screen justify-center items-center w-full bg-red-600'>
        <h2 className='text-3xl mb-7 text-white font-semibold'>Update you task ..</h2>
       <form className='bg-red-300 w-100 flex flex-col p-10 rounded-xl' action="" onSubmit={handleSubmit}>
        <input className='bg-white p-2 -mb-5 rounded-md w-full' type="text" placeholder = "Enter you routine"
         name="task" id=""
         value={getInput.task}
         onChange={handleChange} /> <br /><br />
        <input className='bg-white p-2 rounded-md w-full'  type="text" placeholder="importance" name="important" value={getInput.important} onChange={handleChange} id="" /><br /><br />
        <button  className='text-center bg-blue-300 py-3 rounded-md' type="submit">Update</button>
      </form>
    </div>
  )
}

export default Edit
