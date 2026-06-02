import React, { useState } from 'react';
const CounterApp = () => {
    const [counter,setCounter] =useState(0);
    const handleCount = () => {
        setCounter(counter+1);
    }
    return (
        <div>
                <p>Count : {counter}</p>
                <button onClick={handleCount}>Increase</button>

        </div>
    )
}
export default CounterApp;