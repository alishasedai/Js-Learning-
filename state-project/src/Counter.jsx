import { useState } from "react"

function Counter(){
const [state,setState] = useState(0)
const increase = ()=> {
    setState(state+1)
}
const decrease = () => {
    setState(state-1)
}
    return (
        <>
           <div>
             
             <h2>
                Count :{state}
            </h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>

           </div>
        </>
    )
}
export default Counter