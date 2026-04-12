import React from 'react'
import anju from "./Bye.module.css"

const Bye = () => {  
    // function getName(yourname){
    //     return yourname
    // }  
function handleClick (){
    alert("You clicked me ...");

}
function handleInput (event){
    // console.clear();
    console.log("value",event.target.value)
}
function handleMouseOver(){
    console.log("Mouse is over..", new Date().getTime());
}
const  handleDoubleClick = () =>{
    console.log("Double click is done..")
}
    //using the arrow function
   const getName = (yourname) => {
        return yourname
    }
    const name = "Arju Sedai...";
    const name2 = "Alisha Sedai...";
  return (
    <div>
      <h2 className={anju.testing}>Sanvi Sedai</h2>
      <h1>Hello {getName(name)}</h1>
      <h3>Hello {getName(name2)}</h3>
      <p onMouseEnter={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit error veritatis laboriosam deserunt. ut quos qui inventore.</p>
      <button onClick={handleClick}>Click Me..</button><br />
      <button onClick={() => {alert("hello from inline function")}}>Hello</button><br />
      <input type="text" onChange={handleInput} placeholder='enter some text..' />

    </div>
  )
}

export default Bye
